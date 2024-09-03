import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Importa tu módulo principal de la aplicación
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<express.Application>(AppModule);
  
  // Configura el middleware para validar las solicitudes POST y GET automáticamente con 'ValidationPipe' por ejemplo:
  app.use(new ValidationPipe());

  if (process.env.NODE_ENV === 'production') {
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`)); // Configura el puerto si es necesario (por ejemplo, cambiando de '3000' a la variable del entorno PORT).
  } else {
    await app.start(); // Inicia tu aplicación en modo desarrollo para pruebas y depuración automáticas:
  }
}
bootstrap();
