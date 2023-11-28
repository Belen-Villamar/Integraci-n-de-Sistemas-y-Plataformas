import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class VeterinarioDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  id_veterinaria: string;

  @IsString()
  @IsNotEmpty()
  nombre_veterinaria: string;

  @IsString()
  @IsNotEmpty()
  id_proveedor: string;

  @IsString()
  @IsNotEmpty()
  nombre_veterinario: string;

  @IsString()
  @IsNotEmpty()
  id_apellido_veterinario: string;
}
