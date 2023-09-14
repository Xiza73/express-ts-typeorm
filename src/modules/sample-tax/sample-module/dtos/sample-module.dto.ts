import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { BaseDto } from "../../../../common/dtos";

export class SampleModuleDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}

export class CreateSampleModuleDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
