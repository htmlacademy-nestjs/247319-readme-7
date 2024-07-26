import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CommentRdo {
  @ApiProperty({
    description: 'Comment message',
    example: 'ddjsjdflsjdflsjfljsldfj sljkdflj sldjflsjdflj',
  })
  @Expose()
  public message: string;

  @ApiProperty({
    description: 'user id',
    example: 'edea23ac-292a-4cea-ac69-658e08262082',
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'post id',
    example: '49afd4eb-ce03-426b-a436-c167f8185b22',
  })
  @Expose()
  public postId: string;

  @ApiProperty({
    description: 'created date',
    example: '2024-07-26T03:16:03.128Z',
  })
  @Expose()
  public createdDate: string;

  @ApiProperty({
    description: 'updated date',
    example: '2024-07-26T03:16:03.128Z',
  })
  @Expose()
  public updatedDate: string;
}
