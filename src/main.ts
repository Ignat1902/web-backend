import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('AssetStore API')
    .setVersion('1.0')
    .build(); // Конфигурируем сборщик документации
  const document = SwaggerModule.createDocument(app, config); // создаем API документацию
  SwaggerModule.setup('api_docs', app, document); // Включаем документацию Swagger по пути localhost:3001/api_docs

  await app.listen(3000); // Устанавливаем порт прослушивания 3000
  await app.setGlobalPrefix('/api');
}
bootstrap();
