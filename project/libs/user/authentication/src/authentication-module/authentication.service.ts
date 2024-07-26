import dayjs = require('dayjs');
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BlogUserRepository, BlogUserEntity } from '@project/blog-user';
import { UserRole } from '@project/core';
import { CreateUserDto } from '../dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { LoginUserDto } from '../dto/login-user.dto';
import { UpdatePasswordDto } from '../dto/update-password.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository
  ) {}

  public async register(dto: CreateUserDto): Promise<BlogUserEntity> {
    const {email, username, password, dateBirth} = dto;

    const blogUser = {
      email, username, role: UserRole.User,
      avatarUrl: '', dateOfBirth: dayjs(dateBirth).toDate(),
      passwordHash: ''
    };

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new BlogUserEntity(blogUser).setPassword(password)

    this.blogUserRepository.save(userEntity);

    return userEntity;
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (! existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (! await existUser.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return existUser;
  }

  public async getUser(id: string) {
    const user = await this.blogUserRepository.findById(id);

    if (! user) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    return user;
  }

  public async updatePassword(userId: string, dto: UpdatePasswordDto) {
    const user = await this.blogUserRepository.findById(userId);

    if (!user) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (!await user.comparePassword(dto.oldPassword)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    await user.setPassword(dto.newPassword);
    await this.blogUserRepository.save(user);

    return user;
  }
}
