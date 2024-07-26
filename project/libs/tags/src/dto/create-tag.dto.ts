import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({
    description: 'The uniq post ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  public postId: string;
  @ApiProperty({
    description: 'tag title',
    example: 'Video',
  })
  public title: string;
}
