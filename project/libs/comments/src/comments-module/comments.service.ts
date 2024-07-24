import { Injectable } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CommentsEntity } from './comments.entity';
import { Comment } from '@project/core';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsRepository
  ) {}

  public async getCommentsByPostId(postId: string) {
    return this.commentsRepository.findById(postId);
  }

  public async createComment(data: Comment): Promise<CommentsEntity> {
    const commentEntity = CommentsEntity.fromObject(data);
    await this.commentsRepository.save(commentEntity)

    return commentEntity;
  }
}
