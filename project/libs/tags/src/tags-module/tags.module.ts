import { Module } from '@nestjs/common';
import { PostModule } from '@project/post';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TagsFactory } from './tags.factory';
import { TagsRepository } from './tags.repository';

@Module({
  imports: [PostModule],
  providers: [TagsService, TagsFactory, TagsRepository],
  controllers: [TagsController],
  exports: [TagsService],
})
export class TagsModule {}
