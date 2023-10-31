import { Module } from '@nestjs/common';
import { VeterinariaModule } from '../veterinaria/veterinaria.module';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { MensajesWsService } from './mensajes-ws.service';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[VeterinariaModule]
})
export class MensajesWsModule {}
