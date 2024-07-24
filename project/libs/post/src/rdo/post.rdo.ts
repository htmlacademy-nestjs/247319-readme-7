import { PostState, PostType } from '@project/core';
import { Expose } from 'class-transformer';

export class PostRdo {
  @Expose()
  id?: string;

  @Expose()
  userId: string;

  @Expose()
  postType: PostType;

  @Expose()
  postState: PostState;

  @Expose()
  createdDate?: Date;

  @Expose()
  updatedDate?: Date;

  @Expose()
  publishDate?: Date;

  @Expose()
  creatorUserId?: string;

  @Expose()
  originalPostId?: string;

  @Expose()
  isReposted?: boolean;

  @Expose()
  title?: string;

  @Expose()
  link?: string;

  @Expose()
  description?: string;

  @Expose()
  photoUrl?: string;

  @Expose()
  quoteText?: string;

  @Expose()
  quoteAuthor?: string;

  @Expose()
  announcement?: string;

  @Expose()
  postText?: string;

  @Expose()
  videoLink?: string;
}
