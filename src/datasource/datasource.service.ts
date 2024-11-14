import { Injectable } from '@nestjs/common';
import { Product } from 'src/product/product.entity';
import { Review } from 'src/review/review.entity';
import { User } from 'src/users/user.entity';
import { Order } from 'src/order/order.entity';

@Injectable()
export class DatasourceService {
  private user: User[] = [];
  private product: Product[] = [];
  private review: Review[] = [];
  private order: Order[] = [];

  getProduct(): Product[] {
    return this.product;
  }

  getUser(): User[] {
    return this.user;
  }

  getReview(): Review[] {
    return this.review;
  }

  getOrder(): Order[] {
    return this.order;
  }

  addProduct(product: Product): void {
    this.product.push(product);
  }

  addUser(user: User): void {
    this.user.push(user);
  }

  addReview(review: Review): void {
    this.review.push(review);
  }

  addOrder(order: Order): void {
    this.order.push(order);
  }

  findUserById(id: number): User {
    return this.user.find((user) => user.id === id);
  }

  findProductById(id: number): Product {
    return this.product.find((product) => product.id === id);
  }

  findReviewById(id: number): Review {
    return this.review.find((review) => review.id === id);
  }

  findOrderById(id: number): Order {
    return this.order.find((order) => order.id === id);
  }
}
