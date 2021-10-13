import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model, Types } from 'mongoose';
import { ConfigService } from '@nestjs/config';

import { Domain } from '../schema/domain.schema';
import { DomainDto } from '../dto/domain.dto';

export class DomainsRepository {
  private logger = new Logger(DomainsRepository.name);

  constructor(
    @InjectModel(Domain.name) private domainModel: Model<Domain>,
    private configService: ConfigService,
  ) {}

  async createDomain(domainDto: DomainDto): Promise<Domain> {
    try {
      const domainCreated = await this.domainModel.create(domainDto);
      return domainCreated;
    } catch (error) {
      this.logger.error(error.message);
      if (error.code === 11000) {
        throw new InternalServerErrorException(
          'this domain has already been registered',
        );
      }
      throw new InternalServerErrorException(
        'there was a problem creating the domain',
      );
    }
  }

  async getDomains(paginated: number, limit: number): Promise<Domain[]> {
    try {
      const domains = await this.domainModel
        .find({})
        .skip(paginated * limit)
        .limit(limit);
      return domains;
    } catch (error) {
      this.logger.error(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }

  async updateDomains(domainId: string, domainDto: DomainDto): Promise<Domain> {
    try {
      const updateDomains = await this.domainModel.findByIdAndUpdate(
        domainId,
        domainDto,
        { new: true },
      );
      return updateDomains;
    } catch (error) {
      this.logger.error(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }

  async getDomainsByOwner(ownerId: string): Promise<Domain[]> {
    try {
      const domainsByOwner = await this.domainModel.find({ ownerId });
      return domainsByOwner;
    } catch (error) {
      this.logger.error(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }

  async searchDomain(search: string): Promise<Domain[]> {
    try {
      const domain = await this.domainModel.find({
        domainName: { $regex: search },
      });

      return domain;
    } catch (error) {
      this.logger.error(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }
}
