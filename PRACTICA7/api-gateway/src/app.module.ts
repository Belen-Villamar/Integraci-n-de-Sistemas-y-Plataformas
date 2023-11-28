import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeterinarioModule } from './veterinario/veterinario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    VeterinarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
