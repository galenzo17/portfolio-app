import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private readonly portfolioService;
    constructor(portfolioService: PortfolioService);
    getProfit(): number;
    getAnnualizedReturn(startDate: string, endDate: string): number;
}
