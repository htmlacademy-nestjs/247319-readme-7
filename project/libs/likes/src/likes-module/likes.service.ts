import { ConflictException, Injectable } from '@nestjs/common';
import { LikesRepository } from './likes.repository';
import { LikesEntity } from './likes.entity';

@Injectable()
export class LikesService {
  constructor(
    private readonly likesRepository: LikesRepository,
  ) {}

  public async createLike(postId: string, userId: string): Promise<LikesEntity> {
    const likeEntityExist = await this.likesRepository.findByPostIdAndUserId(postId, userId);
    if (likeEntityExist) {
      throw new ConflictException(`Like from this user:
        ${userId} on the post: ${postId} already exist`);
    }

    const likeEntity = LikesEntity.createNewObject(postId, userId);
    await this.likesRepository.save(likeEntity)

    return likeEntity;
  }

  public async deleteLike(postId: string, userId: string): Promise<void> {
    const likeEntity = await this.likesRepository.findByPostIdAndUserId(postId, userId);
    if (!likeEntity) {
      throw new ConflictException('Like does not exist');
    }
    await this.likesRepository.deleteById(likeEntity.id);
  }

  public async getLikesByPostId(postId: string): Promise<LikesEntity[]> {
    return this.likesRepository.findByPostId(postId);
  }

}
