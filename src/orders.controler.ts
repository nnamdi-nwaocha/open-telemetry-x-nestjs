import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrderController {
  @Get()
  getOrders() {
    return [
      { id: 1, item: 'Product A', qty: 2 },
      { id: 2, item: 'Product B', qty: 1 },
    ];
  }
}
