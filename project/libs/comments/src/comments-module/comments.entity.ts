import { Entity, StorableEntity, Comment } from '@project/core';

export class CommentsEntity extends Entity implements StorableEntity<Comment> {
  public message: string;
  public postId: string;
  public userId: string;
  public createdDate?: Date;
  public updatedDate?: Date;

  constructor(comment: Comment) {
    super();
    this.populate(comment);
  }

  public populate(comment: Comment): void {
    this.id = comment.id;
    this.message = comment.message;
    this.postId = comment.postId;
    this.userId = comment.userId;
    this.createdDate = comment.createdDate;
    this.updatedDate = comment.updatedDate;
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

  static fromObject(data: Comment): CommentsEntity {
    return new CommentsEntity(data);
  }
}
