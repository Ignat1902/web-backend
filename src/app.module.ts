import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { DatasourceModule } from './datasource/datasource.module';
import { UserModule } from './users/user.module';
import { ReviewModule } from './review/review.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ProductModule,
    DatasourceModule,
    UserModule,
    ReviewModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
