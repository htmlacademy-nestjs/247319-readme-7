import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsFactory } from './comments.factory';
import { CommentsRepository } from './comments.repository';
import { PostModule } from '@project/post';
import { CommentsController } from './comments.controller';

@Module({
  imports: [PostModule],
  providers: [CommentsService, CommentsFactory, CommentsRepository],
  controllers: [CommentsController],
  exports: [CommentsService],
})
export class CommentsModule {}

