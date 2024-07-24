import { PostState } from './post-state.enum';
import { PostType } from './post-type.enum';

export interface Post {
  id?: string;
  userId: string;
  postType: PostType;
  postState: PostState;
  createdDate?: Date;
  updatedDate?: Date;
  publishDate?: Date;
  creatorUserId?: string;
  originalPostId?: string;
  isReposted?: boolean;
  title?: string;
  link?: string;
  description?: string;
  photoUrl?: string;
  quoteText?: string;
  quoteAuthor?: string;
  announcement?: string;
  postText?: string;
  videoLink?: string;
}
