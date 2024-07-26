import { PostService } from '@project/post';
import { Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikeRdo } from '../rdo/like.rdo';
import { fillDto } from '@project/helpers';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LikeResponseMessage } from './likes.constant';

@ApiTags('Likes')
@Controller('post/:postId/likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService,
    private readonly postService: PostService,
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: LikeResponseMessage.LikeCreated,
    type: LikeRdo,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: LikeResponseMessage.PostNotFound,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: LikeResponseMessage.UserAlreadyLikedThisPost,
  })
  @Post('/')
  public async create(@Param('postId') postId: string, @Query('userId') userId: string) {
    const postEntity = await this.postService.getPostById(postId);
    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }
    const likeEntity = await this.likesService.createLike(postId, userId);

    return fillDto(LikeRdo, likeEntity.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: LikeResponseMessage.LikeDeleted,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: LikeResponseMessage.PostNotFound,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: LikeResponseMessage.UserDidntLikedThisPost,
  })
  @Delete('/')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('postId') postId: string, @Query('userId') userId: string) {
    const postEntity = await this.postService.getPostById(postId);
    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }

    await this.likesService.deleteLike(postId, userId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: LikeResponseMessage.LikesFound,
    type: LikeRdo,
    isArray: true,
  })
  @Get('/')
  public async show(@Param('postId') postId: string) {
    const likes = await this.likesService.getLikesByPostId(postId);

    return fillDto(LikeRdo, likes.map((like) => like.toPOJO()));
  }
}
