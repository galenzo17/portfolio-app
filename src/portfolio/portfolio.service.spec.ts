import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioService } from './portfolio.service';
import { StockService } from '../stock/stock.service';

describe('PortfolioService', () => {
  let portfolioService: PortfolioService;
  let stockService: StockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioService, StockService],
    }).compile();

    portfolioService = module.get<PortfolioService>(PortfolioService);
    stockService = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(portfolioService).toBeDefined();
  });

  it('should calculate profit between two dates', () => {
    jest.spyOn(stockService, 'getPrice').mockImplementation((name, date) => {
      if (date.toISOString() === '2023-01-01T00:00:00.000Z') {
        return name === 'AAPL' ? 100 : 200;
      }
      if (date.toISOString() === '2023-12-31T00:00:00.000Z') {
        return name === 'AAPL' ? 150 : 250;
      }
      return 0;
    });

    const profit = portfolioService.calculateProfit(
      new Date('2023-01-01'),
      new Date('2023-12-31'),
    );
    expect(profit).toBe(550); // Expected profit based on mocked prices and quantities
  });

  it('should calculate annualized return between two dates', () => {
    jest.spyOn(stockService, 'getPrice').mockImplementation((name, date) => {
      if (date.toISOString() === '2023-01-01T00:00:00.000Z') {
        return name === 'AAPL' ? 100 : 200;
      }
      if (date.toISOString() === '2023-12-31T00:00:00.000Z') {
        return name === 'AAPL' ? 150 : 250;
      }
      return 0;
    });

    const annualizedReturn = portfolioService.calculateAnnualizedReturn(
      new Date('2023-01-01'),
      new Date('2023-12-31'),
    );
    expect(annualizedReturn).toBeCloseTo(0.55, 2); // Close to 55% annualized return
  });
});
