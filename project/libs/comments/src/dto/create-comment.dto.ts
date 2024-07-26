import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Comment message',
    example: 'ddjsjdflsjdflsjfljsldfj sljkdflj sldjflsjdflj',
  })
  public message: string;

  @ApiProperty({
    description: 'user id',
    example: 'edea23ac-292a-4cea-ac69-658e08262082',
  })
  public userId: string;
}
