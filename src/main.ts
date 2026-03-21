import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT ?? 3000);
  } catch (err: any) {
    throw err;
  }
}
bootstrap();
