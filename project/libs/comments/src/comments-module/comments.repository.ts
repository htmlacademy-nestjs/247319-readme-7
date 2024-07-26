import { BaseMemoryRepository } from '@project/data-access';
import { CommentsEntity } from './comments.entity';
import { CommentsFactory } from './comments.factory';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsRepository extends BaseMemoryRepository<CommentsEntity> {
  constructor(entityFactory: CommentsFactory) {
    super(entityFactory);
  }

  public async findByPostId(postId: string) {
    const entities = Array.from(this.entities.values());
    const comments = entities.filter((entity) => entity.postId === postId);
    return comments.map(this.entityFactory.create);
  }
}
