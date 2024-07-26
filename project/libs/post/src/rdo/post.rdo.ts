import { ApiProperty } from '@nestjs/swagger';
import { PostState, PostType } from '@project/core';
import { Expose } from 'class-transformer';

export class PostRdo {
  @ApiProperty({
    description: 'The uniq post ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  id?: string;

  @ApiProperty({
    description: 'The uniq user ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  userId: string;

  @ApiProperty({
    description: 'The uniq creator post user ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  creatorUserId?: string;

  @ApiProperty({
    description: 'The original post ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  originalPostId?: string;

  @ApiProperty({
    description: 'post type',
    example: 'vide',
  })
  @Expose()
  postType: PostType;

  @ApiProperty({
    description: 'post state',
    example: 'draft',
  })
  @Expose()
  postState: PostState;

  @ApiProperty({
    description: 'post title',
    example: 'MY First Post',
  })
  @Expose()
  title?: string;

  @ApiProperty({
    description: 'link video',
    example: './video/video.mp4',
  })
  @Expose()
  videoLink?: string;

  @ApiProperty({
    description: 'announce post',
    example: 'here will be the post',
  })
  @Expose()
  announcement?: string;

  @ApiProperty({
    description: 'Post created Date',
    example: '2024-07-26'
  })
  @Expose()
  createdDate?: Date;

  @ApiProperty({
    description: 'Post updated Date',
    example: '2024-07-27'
  })
  @Expose()
  updatedDate?: Date;

  @ApiProperty({
    description: 'Post publish Date',
    example: '2024-07-27'
  })
  @Expose()
  publishDate?: Date;

  @ApiProperty({
    description: 'Post text',
    example: 'skjfhksf skjdfhksh io loaiusdo oaudo oaudo aoduoaj dopau'
  })
  @Expose()
  postText?: string;

  @ApiProperty({
    description: 'isreposted post?',
    example: 'true'
  })
  @Expose()
  isReposted?: boolean;

  @ApiProperty({
    description: 'quoteText post',
    example: 'cite post',
  })
  @Expose()
  quoteText?: string;

  @ApiProperty({
    description: 'quoteAuthor post',
    example: 'cite Author name',
  })
  @Expose()
  quoteAuthor?: string;

  @ApiProperty({
    description: 'photoUrl',
    example: './img/photo1.png',
  })
  @Expose()
  photoUrl?: string;

  @ApiProperty({
    description: 'link',
    example: 'https://link.com',
  })
  @Expose()
  link?: string;

  @ApiProperty({
    description: 'description post',
    example: 'post about bla bla',
  })
  @Expose()
  description?: string;

  @ApiProperty({
    description: 'Tags posts',
    example: 'Video',
  })
  @Expose()
  tags?: string[];

  @ApiProperty({
    description: 'quantity likes',
  })
  @Expose()
  likes?: string[];
}
