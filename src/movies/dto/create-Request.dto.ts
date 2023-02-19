// dto = date transfer object

import { IsString } from 'class-validator';
import { IsNumber } from 'class-validator';

export class CreateRequestDto {
  @IsString()
  readonly id: number;
  @IsNumber()
  readonly name: string;
  @IsNumber()
  readonly contact: number;
  @IsNumber()
  readonly adress: string;
  @IsNumber()
  readonly symptom: string;
}
