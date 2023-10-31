import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veterinaria } from './entities/veterinaria.entity';
import { VeterinariaService } from './veterinaria.service';
import { VeterinariaController } from './veterinariacontroller';

@Module({
  controllers: [VeterinariaController],
  providers: [VeterinariaService],
  imports:[ TypeOrmModule.forFeature([
    Veterinaria
  ]) ],
  exports:[ VeterinariaService, TypeOrmModule ]
})
export class VeterinariaModule {}
