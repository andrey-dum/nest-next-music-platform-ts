import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// async function bootstrap() {
//   const PORT = process.env.PORT || 5000;

//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    await app.listen(PORT, () => console.log(`Server start on port - ${PORT}`))
  } catch (e) {
    console.log(e);
    
  }
}

start()
