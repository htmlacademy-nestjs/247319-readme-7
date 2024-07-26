import { PostState } from './post-state.enum';
import { PostType } from './post-type.enum';

export type Post = {
  id?: string;
  userId: string;
  creatorUserId?: string;
  originalPostId?: string;
  postType: PostType;
  postState: PostState;
  title?: string;
  videoLink?: string;
  announcement?: string;
  createdDate?: Date;
  updatedDate?: Date;
  publishDate?: Date;
  postText?: string;
  isReposted?: boolean;
  quoteText?: string;
  quoteAuthor?: string;
  photoUrl?: string;
  link?: string;
  description?: string;
  tags: string[];
  likes?: string[];
}
