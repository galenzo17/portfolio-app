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

  calculateProfit(): number {
    const startValue = this.getPortfolioValue();
    const endValue = this.getPortfolioValue();
    return endValue - startValue;
  }

  private getPortfolioValue(): number {
    return this.stocks.reduce((acc, stock) => {
      const price = this.stockService.getPrice();
      return acc + price * stock.quantity;
    }, 0);
  }

  calculateAnnualizedReturn(startDate: Date, endDate: Date): number {
    const profit = this.calculateProfit();
    const startValue = this.getPortfolioValue();
    const timeDiff =
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 365);
    return profit / startValue / timeDiff;
  }
}
