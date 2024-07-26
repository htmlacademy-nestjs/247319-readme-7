import { EntityFactory, Tag } from '@project/core';
import { TagsEntity } from './tags.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsFactory implements EntityFactory<TagsEntity> {
  public create(entityPlainData: Tag): TagsEntity {
    return new TagsEntity(entityPlainData);
  }
}
