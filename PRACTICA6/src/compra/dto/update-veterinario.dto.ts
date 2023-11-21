import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateVeterinarioDto } from './create-veterinario.dto';

@InputType()
export class UpdateVeterinarioDto extends PartialType(CreateVeterinarioDto) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_veterinario?: string;
}
