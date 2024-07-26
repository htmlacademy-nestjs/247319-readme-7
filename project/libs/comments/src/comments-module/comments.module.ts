import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsFactory } from './comments.factory';
import { CommentsRepository } from './comments.repository';
import { PostModule } from '@project/post';

@Module({
  imports: [PostModule],
  providers: [CommentsService, CommentsFactory, CommentsRepository],
  exports: [CommentsService],
})
export class CommentsModule {}
