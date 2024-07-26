import { PostState, PostType } from '@project/core';
import { Expose } from 'class-transformer';

export class PostRdo {
  @Expose()
  id?: string;

  @Expose()
  userId: string;

  @Expose()
  creatorUserId?: string;

  @Expose()
  originalPostId?: string;

  @Expose()
  postType: PostType;

  @Expose()
  postState: PostState;

  @Expose()
  title?: string;

  @Expose()
  videoLink?: string;

  @Expose()
  announcement?: string;

  @Expose()
  createdDate?: Date;

  @Expose()
  updatedDate?: Date;

  @Expose()
  publishDate?: Date;

  @Expose()
  postText?: string;

  @Expose()
  isReposted?: boolean;

  @Expose()
  quoteText?: string;

  @Expose()
  quoteAuthor?: string;

  @Expose()
  photoUrl?: string;

  @Expose()
  link?: string;

  @Expose()
  description?: string;

  @Expose()
  tags?: string[];

  @Expose()
  likes?: string[];
}
