import { Injectable, HttpStatus } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Review } from './review.entity';

@Injectable()
export class ReviewService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(review: Review): Review {
    this.datasourceService.addReview(review);
    return review;
  }

  findOne(id: number): Review {
    return this.datasourceService.findReviewById(id);
  }

  findAll(): Review[] {
    return this.datasourceService.getReview();
  }

  update(id: number, updatedReview: Review): Review {
    const index = this.datasourceService
      .getReview()
      .findIndex((review) => review.id === id);

    this.datasourceService.getReview()[index] = updatedReview;
    return this.datasourceService.getReview()[index];
  }

  remove(id: number): HttpStatus {
    const index = this.datasourceService
      .getReview()
      .findIndex((review) => review.id === id);

    this.datasourceService.getReview().splice(index, 1);
    return HttpStatus.OK;
  }
}
