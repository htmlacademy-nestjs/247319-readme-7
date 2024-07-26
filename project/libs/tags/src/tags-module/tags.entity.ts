import { Entity, StorableEntity, Tag } from '@project/core';

export class TagsEntity extends Entity implements StorableEntity<Tag> {
  public title: string;
  public postId: string;

  constructor(data: Tag) {
    super();
    if (!data.title) {
      throw new Error('Tag title is required');
    }
    this.populate(data);
  }

  public populate(data: Tag): void {
    this.id = data.id;
    this.title = data.title;
    this.postId = data.postId;
  }

  public toPOJO(): Tag {
    return {
      id: this.id,
      title: this.title,
      postId: this.postId,
    }
  }

  static createNewObject(data: Tag) {
    return new TagsEntity(data);
  }
}
