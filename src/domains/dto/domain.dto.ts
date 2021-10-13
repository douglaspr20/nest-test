import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DomainDto {
  @ApiProperty()
  @IsString()
  domainName: string;

  @ApiProperty()
  @IsString()
  ownerName: string;

  @ApiProperty()
  @IsString()
  ownerId: string;
}
