import { PostService } from '@project/post';
import { Controller, Body, Get, NotFoundException, Param, Post, HttpStatus } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentRdo } from '../rdo/comment.rdo';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { fillDto } from '@project/helpers';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentResponseMessage } from './comments.constant';

@ApiTags('Comments')
@Controller('post/:postId/comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly postService: PostService,
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentResponseMessage.CommentsFound,
    type: CommentRdo,
    isArray: true,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: CommentResponseMessage.PostNotFound,
  })
  @Get('/')
  public async show(@Param('postId') postId: string) {
    const postEntity = await this.postService.getPostById(postId);
    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }
    const commentEntities = await this.commentsService.getCommentsByPostId(postId);
    return fillDto(CommentRdo, commentEntities.map((comment) => comment.toPOJO()));
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: CommentResponseMessage.CommentCreated,
    type: CommentRdo,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: CommentResponseMessage.PostNotFound,
  })
  @Post('/')
  public async create(@Body() dto: CreateCommentDto, @Param('postId') postId: string) {
    const postEntity = await this.postService.getPostById(postId);
    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }
    const commentEntity = await this.commentsService.createComment({
      ...dto,
      postId,
    });

    return fillDto(CommentRdo, commentEntity.toPOJO());
  }
}
