import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  getPrice(stockName: string, date: Date): number {
    // Simulate price retrieval logic
    return Math.random() * 100;
  }
}
