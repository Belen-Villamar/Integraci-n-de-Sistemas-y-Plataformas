import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Veterinario {
  @Field()
  @Prop({ required: true })
  id_veterinaria: string;

  @Field()
  @Prop({ required: true })
  nombre_veterinaria: string;



  @Field()
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
