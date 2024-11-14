import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService as ProductService } from './product.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [DatasourceModule],
})
export class ProductModule {}
