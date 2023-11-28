
import { IsNotEmpty, IsString, MinLength } from 'class-validator';


export class CreateVeterinarioDto {
  @IsString()

  @IsNotEmpty()
  @MinLength(1)
  id_veterinaria: string;


  @IsString()
  @IsNotEmpty()
  nombre_veterinaria: string;


  @IsString()
  @IsNotEmpty()
  nombre_veterinario: string;


  @IsString()
  @IsNotEmpty()
  id_apellido_veterinario: string;

}
