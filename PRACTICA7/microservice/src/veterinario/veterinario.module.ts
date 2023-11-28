import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeterinarioSchema } from './entities/veterinario.entity';
import { VeterinarioController } from './vet.controller';
import { VeterinarioService } from './veterinario.service';

@Module({
  controllers: [VeterinarioController],
  providers: [VeterinarioService],
  imports: [
    MongooseModule.forFeature([
      { name: 'veterinarios', schema: VeterinarioSchema }, // Registra el esquema de Compra
    ]),
  ],
  exports: [VeterinarioService, MongooseModule],
})
export class VeterinarioModule {}
