import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateVeterinariaDto } from './create-veterinaria.dto';

export class UpdateVeterinariaDto extends PartialType(CreateVeterinariaDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
