import { Expose } from 'class-transformer';

export class LikeRdo {
  @Expose()
  public id: string;

  @Expose()
  public postId: string;

  @Expose()
  public userId: string;
}
