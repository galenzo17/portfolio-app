import { Controller, Get, Query } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get('profit')
  getProfit(): number {
    return this.portfolioService.calculateProfit();
  }

  @Get('annualized-return')
  getAnnualizedReturn(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): number {
    return this.portfolioService.calculateAnnualizedReturn(
      new Date(startDate),
      new Date(endDate),
    );
  }
}
