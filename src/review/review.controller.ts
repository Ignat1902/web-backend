import { Controller } from '@nestjs/common';
import { Review } from './review.entity';
import { ReviewService } from './review.service';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findItemById(@Param('id') id: number) {
    const review = this.reviewService.findOne(id);
    return review;
  }

  @Post()
  create(@Body() review: Review) {
    return this.reviewService.create(review);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reviewService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedReview: Review) {
    return this.reviewService.update(id, updatedReview);
  }
}
