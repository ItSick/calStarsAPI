import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Enable CORS and specify the configuration
  // app.enableCors({
  //   origin: 'http://localhost:8100', // Specifies the allowed origin
  //   methods: 'GET, POST, PUT, DELETE, OPTIONS', // Specifies the allowed methods
  //   allowedHeaders: 'Content-Type, Authorization', // Specifies the allowed headers
  // });

  await app.listen(3000);
}
bootstrap();
