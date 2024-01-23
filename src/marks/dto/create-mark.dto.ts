import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMarkDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsString()
  date: string;
}
