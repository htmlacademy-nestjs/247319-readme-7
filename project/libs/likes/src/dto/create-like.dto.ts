import { ApiProperty } from '@nestjs/swagger';

export class CreateLikeDto {
  @ApiProperty({
    description: 'post id',
    example: '49afd4eb-ce03-426b-a436-c167f8185b22',
  })
  public postId: string;

  @ApiProperty({
    description: 'user id',
    example: '6172bf85-015a-473d-9507-7f1a3a8aa156',
  })
  public userId: string;
}
