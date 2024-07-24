import { PostModule } from '@project/post';
import { Module } from '@nestjs/common';

@Module({
  imports: [PostModule],
  controllers: [],
})
export class AppModule {}
