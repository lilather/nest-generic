import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateGenericDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateGenricDto extends PartialType(CreateGenericDto) {}