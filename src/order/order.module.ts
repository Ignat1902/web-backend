import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [DatasourceModule],
})
export class OrderModule {}
