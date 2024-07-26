import { PostState, PostType } from '@project/core';

export class UpdatePostDto {
  public postType?: PostType;
  public postState?: PostState;
  public title?: string;
  public videoLink?: string;
  public announcement?: string;
  public postText?: string;
  public quoteText?: string;
  public quoteAuthor?: string;
  public photoUrl?: string;
  public link?: string;
  public description?: string;
  public tags?: string[];
  public likes?: string[];
}
