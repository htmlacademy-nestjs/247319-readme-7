import { PostType } from '@project/core';

export class UpdatePostDto {
  public postType?: PostType;
  public title?: string;
  public link?: string;
  public description?: string;
  public photoUrl?: string;
  public quoteText?: string;
  public quoteAuthor?: string;
  public announcement?: string;
  public postText?: string;
  public videoLink?: string;
  public tags?: string[];
}
