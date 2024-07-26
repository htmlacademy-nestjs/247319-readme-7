import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.com'
  })
  public email: string;

  @ApiProperty({
    description: 'username',
    example: 'LaLaLa'
  })
  public username: string;

  @ApiProperty({
    description: 'User avatar Url',
    example: './img/photo.jpg'
  })
  public avatarUrl: string;

  @ApiProperty({
    description: 'User birthday (ISO Format)',
    example: '1993-04-07'
  })
  public dateBirth: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public password: string;
}
