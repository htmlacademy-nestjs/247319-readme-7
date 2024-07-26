export const AUTH_USER_EXISTS = 'User with this email exists';
export const AUTH_USER_NOT_FOUND = 'User not found';
export const AUTH_USER_PASSWORD_WRONG = 'User password is wrong';

export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged.',
  LogoutSuccess: 'User successfully logout',
  AuthDoesNotExist: 'User does not login',
  LoggedError: 'Password or Login is wrong.',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created.',
  PasswordChanged: 'New password actually',
} as const;
