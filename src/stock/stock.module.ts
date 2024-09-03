import { Module } from '@nestjs/common';
import { StockService } from './stock.service';

@Module({
  exports: [StockService],
  providers: [StockService],
})
export class StockModule {}
