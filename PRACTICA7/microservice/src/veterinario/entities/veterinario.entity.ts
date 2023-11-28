import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


@Schema()
export class Veterinario {

  @Prop({ required: true })
  id_veterinaria: string;

  @Prop({ required: true })
  nombre_veterinaria: string;


  @Prop({ required: true })
  active: boolean;
  default=true;
  

}

export const VeterinarioSchema = SchemaFactory.createForClass(Veterinario);

export type VeterinarioDocument = Veterinario & Document;
export const VeterinarioModel = mongoose.model<VeterinarioDocument>(
  'veterinarios',
  VeterinarioSchema,
);
