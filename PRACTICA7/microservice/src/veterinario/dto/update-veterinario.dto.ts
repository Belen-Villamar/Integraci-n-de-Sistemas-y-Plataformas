
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateVeterinarioDto } from './veterinario.dto';


export class UpdateVeterinarioDto extends PartialType(CreateVeterinarioDto) {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_veterinario?: string;
}
