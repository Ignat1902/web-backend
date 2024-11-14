import { Controller } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findItemById(@Param('id') id: number) {
    const product = this.productService.findOne(id);
    return product;
  }

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedProduct: Product) {
    return this.productService.update(id, updatedProduct);
  }
}
