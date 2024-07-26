import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TagRdo {
  @ApiProperty({
    description: 'The tag ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'tag title',
    example: 'Video',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'The uniq post ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public postId: string;
}
