import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Order } from './order.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findItemById(@Param('id') id: number) {
    const order = this.orderService.findOne(id);
    return order;
  }

  @Post()
  create(@Body() order: Order) {
    return this.orderService.create(order);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orderService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedOrder: Order) {
    return this.orderService.update(id, updatedOrder);
  }
}
