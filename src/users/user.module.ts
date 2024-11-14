import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [DatasourceModule],
})
export class UserModule {}
