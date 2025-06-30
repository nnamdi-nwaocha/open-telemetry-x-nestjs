import { Controller, Get } from '@nestjs/common';
import { trace, context } from '@opentelemetry/api';

@Controller('products')
export class ProductController {
  @Get()
  async getProducts() {
    const tracer = trace.getTracer('nestjs-opentelemetry-demo');
    const span = tracer.startSpan(
      'fetch_products',
      undefined,
      context.active(),
    );

    // Simulate a delay to mimic a real database or API call
    await new Promise((resolve) =>
      setTimeout(resolve, 100 + Math.random() * 400),
    );

    span.end();

    return [
      { id: 1, name: 'Product A' },
      { id: 2, name: 'Product B' },
    ];
  }
}
