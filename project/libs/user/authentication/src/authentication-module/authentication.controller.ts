import { Controller, Post, Body, Param, Get, Put } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto, LoginUserDto, UpdatePasswordDto } from '../index';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService
  ) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return newUser.toPOJO();
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(dto);
    return verifiedUser.toPOJO();
  }

  @Post('logout')
  public async logout() {
    throw new Error('Not implemented yet');
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    return existUser.toPOJO();
  }

  @Put(':id/password')
  public async updatePassword(@Param('id') id: string, @Body() dto: UpdatePasswordDto) {
    const user = await this.authService.updatePassword(id, dto);
    return user.toPOJO();
  }
}
