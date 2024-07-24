export interface Comment {
  id?: string;
  message: string;
  postId: string;
  userId: string;
  createdDate?: Date;
  updatedDate?: Date;
};
