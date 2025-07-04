import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product.controller';
import { OrderController } from './orders.controler';

@Module({
  imports: [],
  controllers: [AppController, ProductController, OrderController],
  providers: [AppService],
})
export class AppModule {}
