import { PostService } from '@project/post';
import { Controller, Delete, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { LikesService, LikeRdo } from '@project/likes';
import { fillDto } from '@project/helpers';

@Controller('/post/:postId/likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService,
    private readonly postService: PostService,
  ) {}

  @Post('/')
  public async create(@Param('postId') postId: string, @Query('userId') userId: string) {
    const postEntity = await this.postService.getPostById(postId);
    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }
    const likeEntity = await this.likesService.createLike(postId, userId);

    return fillDto(LikeRdo, likeEntity.toPOJO());
  }

  @Delete('/')
  public async delete(@Param('postId') postId: string, @Query('userId') userId: string) {
    const postEntity = await this.postService.getPostById(postId);
    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }

    await this.likesService.deleteLike(postId, userId);
  }

  @Get('/')
  public async show(@Param('postId') postId: string) {
    const likes = await this.likesService.getLikesByPostId(postId);

    return fillDto(LikeRdo, likes.map((like) => like.toPOJO()));
  }
}
