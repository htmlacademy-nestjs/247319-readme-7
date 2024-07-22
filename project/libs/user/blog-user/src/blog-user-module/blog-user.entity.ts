import { Entity } from '@project/core';
import { StorableEntity, AuthUser, UserRole} from '@project/core';
import { SALT_ROUNDS } from './blog-user.constant';
import { compare, genSalt, hash } from 'bcrypt';

export class BlogUserEntity extends Entity implements StorableEntity<AuthUser> {
  public email: string;
  public username: string;
  public avatarUrl: string;
  public dateOfBirth: Date;
  public role: UserRole;
  public passwordHash: string;

  constructor(user?: AuthUser) {
    super();
    this.populate(user);
  }

  public populate(user?: AuthUser): void {
    if (! user) {
      return;
    }

    this.id = user.id ?? '';
    this.email = user.email;
    this.dateOfBirth = user.dateOfBirth;
    this.username = user.username;
    this.avatarUrl = user.avatarUrl;
    this.passwordHash = user.passwordHash;
    this.role = user.role;
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      username: this.username,
      avatarUrl: this.avatarUrl,
      dateOfBirth: this.dateOfBirth,
      role: this.role,
      passwordHash: this.passwordHash,
    }
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
