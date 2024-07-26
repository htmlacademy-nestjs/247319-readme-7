import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDto {
  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public oldPassword: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public newPassword: string;
}
