import { CommentsModule } from '@project/comments';
import { PostModule } from '@project/post';
import { Module } from '@nestjs/common';

@Module({
  imports: [PostModule, CommentsModule],
  controllers: [],
})
export class AppModule {}
