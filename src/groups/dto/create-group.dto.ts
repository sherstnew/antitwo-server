import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { Student } from 'src/schemas/student.schema';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  students: [] | Student[];
}
