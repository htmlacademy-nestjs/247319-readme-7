import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LikeRdo {
  @ApiProperty({
    description: 'like id',
    example: '6172bf85-015a-473d-9507-7f1a3a8aa156',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'post id',
    example: '49afd4eb-ce03-426b-a436-c167f8185b22',
  })
  @Expose()
  public postId: string;

  @ApiProperty({
    description: 'user id',
    example: '6172bf85-015a-473d-9507-7f1a3a8aa156',
  })
  @Expose()
  public userId: string;
}
