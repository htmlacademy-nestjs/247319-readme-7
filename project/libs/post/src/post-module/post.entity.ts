import { Post, Entity, StorableEntity, PostState, PostType } from '@project/core';

export class PostEntity extends Entity implements StorableEntity<Post> {
  public userId: string;
  public postType: PostType;
  public postState: PostState;
  public createdDate?: Date;
  public updatedDate?: Date;
  public publishDate?: Date;
  public isReposted: boolean;
  public creatorUserId?: string;
  public originalPostId?: string;
  public title?: string;
  public link?: string;
  public description?: string;
  public photoUrl?: string;
  public quoteText?: string;
  public quoteAuthor?: string;
  public announcement?: string;
  public postText?: string;
  public videoLink?: string;

  constructor(post: Post) {
    super();
    this.populate(post)
  }

  public populate(post: Post): void {
    this.id = post.id;
    this.userId = post.userId;
    this.postType = post.postType;
    this.postState = post.postState;
    this.createdDate = post.createdDate;
    this.updatedDate = post.updatedDate;
    this.publishDate = post.publishDate;
    this.creatorUserId = post.creatorUserId;
    this.originalPostId = post.originalPostId;
    this.isReposted = post.isReposted;
    this.title = post.title;
    this.link = post.link;
    this.description = post.description;
    this.photoUrl = post.photoUrl;
    this.quoteText = post.quoteText;
    this.quoteAuthor = post.quoteAuthor;
    this.announcement = post.announcement;
    this.postText = post.postText;
    this.videoLink = post.videoLink;
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
    };
  }
}
