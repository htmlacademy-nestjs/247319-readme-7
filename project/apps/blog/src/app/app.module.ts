import { CommentsModule } from '@project/comments';
import { PostModule } from '@project/post';
import { Module } from '@nestjs/common';
import { LikesModule } from '@project/likes';

@Module({
  imports: [PostModule, CommentsModule, LikesModule],
  controllers: [],
})
export class AppModule {}
