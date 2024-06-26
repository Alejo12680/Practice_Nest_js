import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/controller/order.controller';
import { OrderService } from './order/service/order.service';

@Module({
  imports: [],
  controllers: [AppController, OrderController],
  providers: [AppService, OrderService],
})
export class AppModule {}
