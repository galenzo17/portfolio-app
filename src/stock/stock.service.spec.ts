import { Test, TestingModule } from '@nestjs/testing';
import { StockService } from './stock.service';

describe('StockService', () => {
  let service: StockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockService],
    }).compile();

    service = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a number when getting the price of a stock', () => {
    const price = service.getPrice('AAPL', new Date('2023-01-01'));
    expect(typeof price).toBe('number');
  });
});
