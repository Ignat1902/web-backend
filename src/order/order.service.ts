import { Injectable, HttpStatus } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Order } from 'src/order/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(order: Order): Order {
    this.datasourceService.addOrder(order);
    return order;
  }

  findOne(id: number): Order {
    return this.datasourceService.findOrderById(id);
  }

  findAll(): Order[] {
    return this.datasourceService.getOrder();
  }

  update(id: number, updatedOrder: Order): Order {
    const index = this.datasourceService
      .getOrder()
      .findIndex((order) => order.id === id);

    this.datasourceService.getOrder()[index] = updatedOrder;
    return this.datasourceService.getOrder()[index];
  }

  remove(id: number): HttpStatus {
    const index = this.datasourceService
      .getOrder()
      .findIndex((order) => order.id === id);

    this.datasourceService.getOrder().splice(index, 1);
    return HttpStatus.OK;
  }
}
