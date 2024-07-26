import { PostService } from '@project/post';
import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CommentRdo, CommentsService, CreateCommentDto } from '@project/comments';
import { fillDto } from '@project/helpers';

@Controller('/post/:postId/comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly postService: PostService,
  ) {}

  @Get('/')
  public async show(@Param('postId') postId: string) {
    const postEntity = await this.postService.getPostById(postId);
    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }
    const commentEntities = await this.commentsService.getCommentsByPostId(postId);
    return fillDto(CommentRdo, commentEntities.map((comment) => comment.toPOJO()));
  }

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
