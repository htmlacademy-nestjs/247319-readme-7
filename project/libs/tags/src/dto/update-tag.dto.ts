import { ApiProperty } from '@nestjs/swagger';

export class UpdateTagDto {
  @ApiProperty({
    description: 'tag title',
    example: 'Video',
  })
  public title: string;
}
