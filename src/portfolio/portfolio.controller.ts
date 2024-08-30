import { Controller, Get, Query } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get('profit')
  getProfit(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): number {
    return this.portfolioService.calculateProfit(
      new Date(startDate),
      new Date(endDate),
    );
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
