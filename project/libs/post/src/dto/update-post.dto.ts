import { ApiProperty } from '@nestjs/swagger';
import { PostState, PostType } from '@project/core';

export class UpdatePostDto {
  @ApiProperty({
    description: 'post type',
    example: 'vide',
  })
  public postType?: PostType;
  @ApiProperty({
    description: 'post state',
    example: 'draft',
  })
  public postState?: PostState;
  @ApiProperty({
    description: 'post title',
    example: 'MY First Post',
  })
  public title?: string;
  @ApiProperty({
    description: 'link video',
    example: './video/video.mp4',
  })
  public videoLink?: string;
  @ApiProperty({
    description: 'announce post',
    example: 'here will be the post',
  })
  public announcement?: string;
  @ApiProperty({
    description: 'Post text',
    example: 'skjfhksf skjdfhksh io loaiusdo oaudo oaudo aoduoaj dopau'
  })
  public postText?: string;
  @ApiProperty({
    description: 'quoteText post',
    example: 'cite post',
  })
  public quoteText?: string;
  @ApiProperty({
    description: 'quoteAuthor post',
    example: 'cite Author name',
  })
  public quoteAuthor?: string;
  @ApiProperty({
    description: 'photoUrl',
    example: './img/photo1.png',
  })
  public photoUrl?: string;
  @ApiProperty({
    description: 'link',
    example: 'https://link.com',
  })
  public link?: string;
  @ApiProperty({
    description: 'description post',
    example: 'post about bla bla',
  })
  public description?: string;
  @ApiProperty({
    description: 'Tags posts',
    example: 'Video',
  })
  public tags?: string[];
  @ApiProperty({
    description: 'quantity likes',
  })
  public likes?: string[];
}
