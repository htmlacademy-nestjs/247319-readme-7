import { EntityFactory, Like } from '@project/core';
import { LikesEntity } from './likes.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LikesFactory implements EntityFactory<LikesEntity> {
  public create(entityPlainData: Like): LikesEntity {
    return new LikesEntity(entityPlainData);
  }
}
