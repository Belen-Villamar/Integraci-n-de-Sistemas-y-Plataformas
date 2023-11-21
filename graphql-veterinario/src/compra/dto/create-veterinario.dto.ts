import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateVeterinarioDto {
  @IsString()
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(1)
  id_veterinaria: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombre_veterinaria: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombre_veterinario: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_apellido_veterinario: string;

}
