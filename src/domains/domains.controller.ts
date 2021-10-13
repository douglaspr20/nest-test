import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { DomainsService } from './domains.service';
//DTO
import { DomainDto } from './dto/domain.dto';

@Controller('domains')
export class DomainsController {
  constructor(private domainsService: DomainsService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'domains created succesfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error en la información enviada.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'No autorizado.',
  })
  async createDomain(@Body(ValidationPipe) domainDto: DomainDto) {
    const domainCreated = await this.domainsService.createDomain(domainDto);
    return {
      message: 'domains created succesfully.',
      domainCreated,
      statusCode: 201,
    };
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'domains returned succesfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error en la información enviada.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'No autorizado.',
  })
  async getDomains(
    @Query('p') paginated: number,
    @Query('limit') limit: number,
  ) {
    const domains = await this.domainsService.getDomains(paginated, limit);
    return {
      message: 'domains returned succesfully.',
      domains,
      statusCode: 200,
    };
  }

  @Put(':domainId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'domain updated succesfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error en la información enviada.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'No autorizado.',
  })
  async updateDomains(
    @Param('domainId') domainId: string,
    @Body(ValidationPipe) domainDto: DomainDto,
  ) {
    const updatedDomain = await this.domainsService.updateDomains(
      domainId,
      domainDto,
    );
    return {
      message: 'domains updated succesfully.',
      updatedDomain,
      statusCode: 203,
    };
  }

  @Get('byOwner/:ownerId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'domain returned succesfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error en la información enviada.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'No autorizado.',
  })
  async getDomainsByOwner(@Param('ownerId') ownerId: string) {
    const domainsByOwner = await this.domainsService.getDomainsByOwner(ownerId);
    return {
      message: 'domains by owener returned succesfully.',
      domains: domainsByOwner,
      statusCode: 200,
    };
  }

  @Post('search')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'domain returned succesfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error en la información enviada.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'No autorizado.',
  })
  async searchDomain(@Query('q') search: string) {
    const domains = await this.domainsService.searchDomain(search);

    return {
      message: 'domains returned succesfully.',
      domains,
      statusCode: 200,
    };
  }
}
