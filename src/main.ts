import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = new ConfigService();
  const PORT = configService.get<string>('APP_PORT');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => {
    Logger.log(`Server is listening on port ${PORT}`);
  });
}
bootstrap();
