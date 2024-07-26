import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'uniq user ID',
    example: '123'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User avatar Url',
    example: './img/photo.jpg'
  })
  @Expose()
  public avatarUrl: string;

  @ApiProperty({
    description: 'User birthday (ISO Format)',
    example: '1993-04-07'
  })
  @Expose()
  public dateOfBirth: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'username',
    example: 'LaLaLa'
  })
  @Expose()
  public username: string;
}
