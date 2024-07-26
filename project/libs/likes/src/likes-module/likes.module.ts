import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesFactory } from './likes.factory';
import { LikesRepository } from './likes.repository';
import { PostModule } from '@project/post';

@Module({
  imports: [PostModule],
  providers: [LikesService, LikesFactory, LikesRepository],
  exports: [LikesService]
})
export class LikesModule {}
