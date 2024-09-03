import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  getPrice(): number {
    return Math.random() * 100;
  }
}
