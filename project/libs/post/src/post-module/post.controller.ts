import { CreatePostDto } from '../dto/create-post.dto';
import { PostService } from './post.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { UpdatePostDto } from '../dto/update-post.dto';
import { fillDto } from '@project/helpers';
import { PostRdo } from '../rdo/post.rdo';
@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) {}

  @Get('/')
  public async index() {
    const postEntities = await this.postService.getAllPosts();
    return fillDto(PostRdo, postEntities.map((post) => post.toPOJO()));
  }

  @Post('/')
  public async create(@Body() dto: CreatePostDto) {
    const postEntity = await this.postService.createPost(dto);
    return fillDto(PostRdo, postEntity.toPOJO());
  }

  @Get('/:postId')
  public async show(@Param('postId') postId: string) {
    const postEntity = await this.postService.getPostById(postId);
    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }

    return fillDto(PostRdo, postEntity.toPOJO());
  }

  @Patch('/:postId')
  public async update(@Param('postId') postId: string, @Body() dto: UpdatePostDto) {
    const postEntity = await this.postService.updatePost(postId, dto);

    return fillDto(PostRdo, postEntity.toPOJO());
  }

  @Delete(':/postId')
  public async delete(@Param('postId') postId: string) {
    await this.postService.deletePost(postId);
  }
}
