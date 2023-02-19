import { Module } from '@nestjs/common';
import { RequestController } from './movies/movies.controller';
import { RequestService } from './movies/requests.service';

@Module({
  imports: [],
  controllers: [RequestController],
  providers: [RequestService],
})
export class AppModule {}
