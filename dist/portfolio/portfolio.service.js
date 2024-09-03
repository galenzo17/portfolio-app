"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioService = void 0;
const common_1 = require("@nestjs/common");
const stock_service_1 = require("../stock/stock.service");
let PortfolioService = class PortfolioService {
    constructor(stockService) {
        this.stockService = stockService;
        this.stocks = [
            { name: 'AAPL', quantity: 10 },
            { name: 'TSLA', quantity: 5 },
        ];
    }
    calculateProfit() {
        const startValue = this.getPortfolioValue();
        const endValue = this.getPortfolioValue();
        return endValue - startValue;
    }
    getPortfolioValue() {
        return this.stocks.reduce((acc, stock) => {
            const price = this.stockService.getPrice();
            return acc + price * stock.quantity;
        }, 0);
    }
    calculateAnnualizedReturn(startDate, endDate) {
        const profit = this.calculateProfit();
        const startValue = this.getPortfolioValue();
        const timeDiff = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 365);
        return profit / startValue / timeDiff;
    }
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], PortfolioService);
//# sourceMappingURL=portfolio.service.js.map