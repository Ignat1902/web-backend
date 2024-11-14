import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(product: Product): Product {
    this.datasourceService.addProduct(product);
    return product;
  }

  findOne(id: number): Product {
    return this.datasourceService.findProductById(id);
  }

  findAll(): Product[] {
    return this.datasourceService.getProduct();
  }

  update(id: number, updatedItem: Product): Product {
    const index = this.datasourceService
      .getProduct()
      .findIndex((product) => product.id === id);

    this.datasourceService.getProduct()[index] = updatedItem;
    return this.datasourceService.getProduct()[index];
  }

  remove(id: number): HttpStatus {
    const index = this.datasourceService
      .getProduct()
      .findIndex((product) => product.id === id);

    this.datasourceService.getProduct().splice(index, 1);
    return HttpStatus.OK;
  }
}
