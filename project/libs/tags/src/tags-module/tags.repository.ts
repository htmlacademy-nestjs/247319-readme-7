import { BaseMemoryRepository } from '@project/data-access';
import { TagsEntity } from './tags.entity';
import { TagsFactory } from './tags.factory';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsRepository extends BaseMemoryRepository<TagsEntity> {
  constructor(entityFactory: TagsFactory) {
    super(entityFactory);
  }

  public async findByPostId(postId: string) {
    const entities = Array.from(this.entities.values());
    const comments = entities.filter((entity) => entity.postId === postId);
    return comments.map(this.entityFactory.create);
  }

  public async findByTitle(title: string) {
    const entities = Array.from(this.entities.values());
    const tag = entities.find((entity) => entity.title === title);

    if (!tag) {
      return null;
    }

    return this.entityFactory.create(tag);
  }
}
