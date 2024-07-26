import { BaseMemoryRepository } from '@project/data-access';
import { PostEntity } from './post.entity';
import { PostFactory } from './post.factory';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostRepository extends BaseMemoryRepository<PostEntity> {
  constructor(entityFactory: PostFactory) {
    super(entityFactory);
  }
}
