import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [DatasourceModule],
})
export class ReviewModule {}
