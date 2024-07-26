import { Module } from '@nestjs/common';
import { PostModule } from '@project/post';
import { CommentsModule } from '@project/comments';
import { LikesModule } from '@project/likes';

@Module({
  imports: [PostModule, CommentsModule, LikesModule],
  controllers: [],
})
export class AppModule {}
