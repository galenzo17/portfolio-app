import { StockService } from '../stock/stock.service';
export declare class PortfolioService {
    private readonly stockService;
    private stocks;
    constructor(stockService: StockService);
    calculateProfit(): number;
    private getPortfolioValue;
    calculateAnnualizedReturn(startDate: Date, endDate: Date): number;
}
