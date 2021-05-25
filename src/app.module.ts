import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { CustomerModule } from './customer/customer.module';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    CustomerModule],
})
export class AppModule {}
