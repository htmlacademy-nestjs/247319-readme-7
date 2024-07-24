import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CommentsFactory } from './comments.factory';
import { CommentsRepository } from './comments.repository';
import { PostModule } from '@project/post';

@Module({
  imports: [PostModule],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsFactory, CommentsRepository]
})
export class CommentsModule {}
