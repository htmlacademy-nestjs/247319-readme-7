import { BaseMemoryRepository } from '@project/data-access';
import { LikesEntity } from './likes.entity';
import { LikesFactory } from './likes.factory';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LikesRepository extends BaseMemoryRepository<LikesEntity> {
  constructor(entityFactory: LikesFactory) {
    super(entityFactory);
  }

  public async findByPostId(postId: string) {
    const entities = Array.from(this.entities.values());
    const comments = entities.filter((entity) => entity.postId === postId);
    return comments.map(this.entityFactory.create);
  }

  public async findByPostIdAndUserId(postId: string, userId: string) {
    const entities = Array.from(this.entities.values());
    const like = entities
      .find((entity) => {
        entity.postId === postId && entity.userId === userId
      }
    );

    if (! like) {
      return null;
    }

    return this.entityFactory.create(like);
  }
}
