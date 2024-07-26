import { Comment, EntityFactory } from '@project/core';
import { CommentsEntity } from './comments.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsFactory implements EntityFactory<CommentsEntity> {
  public create(entityPlainData: Comment): CommentsEntity {
    return new CommentsEntity(entityPlainData);
  }
}
