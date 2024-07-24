import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostFactory } from './post.factory';
import { PostRepository } from './post.repository';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService, PostFactory, PostRepository]
})
export class PostModule {}
