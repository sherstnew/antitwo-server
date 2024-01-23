import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type GroupDocument = HydratedDocument<Group>;

@Schema()
export class Group {
  @Prop()
  name: string;

  @Prop()
  students: Types.ObjectId[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
