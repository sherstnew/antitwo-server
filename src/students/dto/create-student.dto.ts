import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Mark } from 'src/schemas/mark.schema';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  marks: [] | Mark[];
}
