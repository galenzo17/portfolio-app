import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { StockModule } from '../stock/stock.module'; // Asegúrate de que la ruta sea correcta
import { PortfolioController } from './portfolio.controller';

@Module({
  controllers: [PortfolioController],
  imports: [StockModule], // Solo en 'imports'
  providers: [PortfolioService], // Elimina 'StockModule' de 'providers'
  exports: [PortfolioService],
})
export class PortfolioModule {}
