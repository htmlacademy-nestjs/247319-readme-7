import { Post, Entity, StorableEntity, PostState, PostType } from '@project/core';

export class PostEntity extends Entity implements StorableEntity<Post> {
  public userId: string;
  public creatorUserId?: string;
  public originalPostId?: string;
  public postType: PostType;
  public postState: PostState;
  public title?: string;
  public videoLink?: string;
  public announcement?: string;
  public createdDate?: Date;
  public updatedDate?: Date;
  public publishDate?: Date;
  public postText?: string;
  public isReposted: boolean;
  public quoteText?: string;
  public quoteAuthor?: string;
  public photoUrl?: string;
  public link?: string;
  public description?: string;
  public tags: string[];
  public likes: string[];

  constructor(data: Post) {
    super();
    this.populate(data)
  }

  public populate(data: Post): void {
    this.id = data.id;
    this.userId = data.userId;
    this.creatorUserId = data.creatorUserId;
    this.originalPostId = data.originalPostId;
    this.postType = data.postType;
    this.postState = data.postState;
    this.title = data.title;
    this.videoLink = data.videoLink;
    this.announcement = data.announcement;
    this.createdDate = data.createdDate;
    this.updatedDate = data.updatedDate;
    this.publishDate = data.publishDate;
    this.postText = data.postText;
    this.isReposted = data.isReposted;
    this.quoteText = data.quoteText;
    this.quoteAuthor = data.quoteAuthor;
    this.photoUrl = data.photoUrl;
    this.link = data.link;
    this.description = data.description;
    this.tags = data.tags;
    this.likes = data.likes;
  }

  public toPOJO(): Post {
    return {
      id: this.id,
      userId: this.userId,
      postType: this.postType,
      postState: this.postState,
      createdDate: this.createdDate,
      updatedDate: this.updatedDate,
      publishDate: this.publishDate,
      creatorUserId: this.creatorUserId ?? null,
      originalPostId: this.originalPostId ?? null,
      isReposted: this.isReposted,
      title: this.title ?? null,
      link: this.link ?? null,
      description: this.description ?? null,
      photoUrl: this.photoUrl ?? null,
      quoteText: this.quoteText ?? null,
      quoteAuthor: this.quoteAuthor ?? null,
      announcement: this.announcement ?? null,
      postText: this.postText ?? null,
      videoLink: this.videoLink ?? null,
      tags: this.tags,
      likes: this.likes ?? null,
    };
  }
}
