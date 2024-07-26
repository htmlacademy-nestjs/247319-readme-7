import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostEntity } from './post.entity';
import { UpdatePostDto } from '../dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository
  ) {}

  public async getPostById(id: string) {
    return this.postRepository.findById(id);
  }

  public async getAllPosts() {
    return this.postRepository.findAll();
  }

  public async createPost(dto: CreatePostDto): Promise<PostEntity> {
    const postEntity = new PostEntity(dto);
    await this.postRepository.save(postEntity);

    return postEntity;
  }

  public async updatePost(postId: string, dto: UpdatePostDto) {
    const postEntity = await this.postRepository.findById(postId);

    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }

    postEntity.title = dto.title;
    postEntity.link = dto.link;
    postEntity.description = dto.description;
    postEntity.photoUrl = dto.photoUrl;
    postEntity.quoteText = dto.quoteText;
    postEntity.quoteAuthor = dto.quoteAuthor;
    postEntity.announcement = dto.announcement;
    postEntity.postText = dto.postText;
    postEntity.videoLink = dto.videoLink;

    await this.postRepository.update(postEntity);

    return postEntity;
  }

  public async deletePost(postId: string) {
    const postEntity = await this.postRepository.findById(postId);

    if (!postEntity) {
      throw new NotFoundException(`Post with id: ${postId} not found`);
    }

    return await this.postRepository.deleteById(postId);
  }
}
