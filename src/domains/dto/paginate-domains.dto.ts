import {
  ArrayUnique,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

/**
 * PaginateTicketsDto.
 *
 * This Dto implements validations from 'class-validator' package in the request's body.
 *
 */
export class PaginateTicketsDto {
  @IsNumberString({}, { message: '$property debe ser un string numérico.' })
  @IsNotEmpty({ message: '$property no debe estar vacío.' })
  @ApiProperty()
  paginated: string;
}
