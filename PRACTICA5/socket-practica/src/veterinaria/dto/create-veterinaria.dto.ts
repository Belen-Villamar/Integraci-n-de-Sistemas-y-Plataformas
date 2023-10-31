import { IsNotEmpty, IsString } from "class-validator";

export class CreateVeterinariaDto {

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    direccion:string;
    

}
