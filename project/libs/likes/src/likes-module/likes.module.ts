import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesFactory } from './likes.factory';
import { LikesRepository } from './likes.repository';
import { PostModule } from '@project/post';
import { LikesController } from './likes.controller';

@Module({
  imports: [PostModule],
  providers: [LikesService, LikesFactory, LikesRepository],
  controllers: [LikesController],
  exports: [LikesService]
})
export class LikesModule {}
