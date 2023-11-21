import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeterinarioSchema } from './entities/veterinario.entity';
import { VeterinarioController } from './vet.controller';
import { VeterinarioResolver } from './veterinario.resolver';
import { VeterinarioService } from './veterinario.service';

@Module({
  controllers: [VeterinarioController],
  providers: [VeterinarioService, VeterinarioResolver],
  imports: [
    MongooseModule.forFeature([
      { name: 'veterinarios', schema: VeterinarioSchema }, // Registra el esquema de Compra
    ]),
  ],
  exports: [VeterinarioService, MongooseModule],
})
export class VeterinarioModule {}
