import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  app.use(json());
  app.use(urlencoded({ extended: true, limit: '1mb' }));

  const configService = app.get(ConfigService);

  app.enableCors();

  const port = configService.get('PORT');

  const server = await app.listen(port);
  logger.log(`Application running on port ${port}`);
  server.setTimeout(1800000);
}
bootstrap();
