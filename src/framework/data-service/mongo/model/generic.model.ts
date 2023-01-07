import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GenericDocument = HydratedDocument<Generic>;

@Schema()
export class Generic {
  @Prop()
  name: string;

}

export const GenericSchema = SchemaFactory.createForClass(Generic);