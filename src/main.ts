import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<express.Express>(AppModule);
  await app.listen(3000);
}
bootstrap();
