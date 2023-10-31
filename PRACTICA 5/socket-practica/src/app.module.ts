import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesWsModule } from './mensajes-ws/mensajes-ws.module';
import { VeterinariaModule } from './veterinaria/veterinaria.module';

@Module({
  imports: [VeterinariaModule,
    ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type:'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
  }),
  MensajesWsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
