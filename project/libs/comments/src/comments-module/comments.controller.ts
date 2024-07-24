import { PostService } from '@project/post';
import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CommentsEntity, CommentsService, CreateCommentDto } from '@project/comments';

@Controller('/post/:postId/comments')
export class CommentsController {
  constructor(
    private readonly postService: PostService,
    private readonly commentsService: CommentsService
  ) {}

  @Get('/')
  public async show(@Param('postId') postId: string) {
    const postEntity = await this.postService.getPostById(postId);
    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }
    const commentEntities = await this.commentsService.getCommentsByPostId(postId);
    //Почему-то тут не массив приходит - и я запутался
    return commentEntities;
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

    return commentEntity.toPOJO();
  }

}
