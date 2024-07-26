import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostFactory } from './post.factory';
import { PostRepository } from './post.repository';
import { PostController } from './post.controller';

@Module({
  providers: [PostService, PostFactory, PostRepository],
  controllers: [PostController],
  exports: [PostService]
})
export class PostModule {}
