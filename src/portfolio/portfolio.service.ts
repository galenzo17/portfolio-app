import { Injectable } from '@nestjs/common';
import { StockService } from '../stock/stock.service';

interface Stock {
  name: string;
  quantity: number;
}

@Injectable()
export class PortfolioService {
  private stocks: Stock[] = [
    { name: 'AAPL', quantity: 10 },
    { name: 'TSLA', quantity: 5 },
  ];

  constructor(private readonly stockService: StockService) {}

  calculateProfit(startDate: Date, endDate: Date): number {
    const startValue = this.getPortfolioValue(startDate);
    const endValue = this.getPortfolioValue(endDate);
    return endValue - startValue;
  }

  private getPortfolioValue(date: Date): number {
    return this.stocks.reduce((acc, stock) => {
      const price = this.stockService.getPrice(stock.name, date);
      return acc + price * stock.quantity;
    }, 0);
  }

  calculateAnnualizedReturn(startDate: Date, endDate: Date): number {
    const profit = this.calculateProfit(startDate, endDate);
    const startValue = this.getPortfolioValue(startDate);
    const timeDiff =
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 365);
    return profit / startValue / timeDiff;
  }
}
