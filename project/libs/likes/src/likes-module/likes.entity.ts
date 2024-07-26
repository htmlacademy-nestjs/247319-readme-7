import { Entity, Like, StorableEntity } from '@project/core';

export class LikesEntity extends Entity implements StorableEntity<Like> {
  public postId: string;
  public userId: string;

  constructor(data: Like) {
    super();
    if (!data.postId || !data.userId) {
      throw new Error('PostId or UserId does not exist')
    }
    this.populate(data);
  }

  public populate(data: Like): void {
    this.id = data.id;
    this.postId = data.postId;
    this.userId = data.userId;
  }

  public toPOJO(): Like {
    return {
      id: this.id,
      postId: this.postId,
      userId: this.userId,
    }
  }

  static createNewObject(postId: string, userId: string) {
    return new LikesEntity({
      postId,
      userId,
    })
  }
}
