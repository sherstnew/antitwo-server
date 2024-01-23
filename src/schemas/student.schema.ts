import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop()
  name: string;
  @Prop()
  marks: Types.ObjectId[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
