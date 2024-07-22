import { UserRole } from './user-role.enum';

export interface User {
  id?: string;
  email: string;
  username: string;
  avatarUrl?: string;
  dateOfBirth: Date;
  role: UserRole;
}
