import { Entity, StorableEntity, Comment } from '@project/core';

export class CommentsEntity extends Entity implements StorableEntity<Comment> {
  public message: string;
  public postId: string;
  public userId: string;
  public createdDate?: Date;
  public updatedDate?: Date;

  constructor(data: Comment) {
    super();
    this.populate(data);
  }

  public populate(data: Comment): void {
    this.id = data.id;
    this.message = data.message;
    this.postId = data.postId;
    this.userId = data.userId;
    this.createdDate = data.createdDate;
    this.updatedDate = data.updatedDate;
  }

  public toPOJO(): Comment {
    return {
      id: this.id,
      message: this.message,
      postId: this.postId,
      userId: this.userId,
      createdDate: this.createdDate,
      updatedDate: this.updatedDate,
    }
  }

  static createNewObject(data: Comment): CommentsEntity {
    return new CommentsEntity(data);
  }
}
