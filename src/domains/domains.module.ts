import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainsController } from './domains.controller';
import { DomainsService } from './domains.service';
import { DomainsRepository } from './repositories/domains.repository';
import { Domain, DomainSchema } from './schema/domain.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Domain.name, schema: DomainSchema }]),
  ],
  controllers: [DomainsController],
  providers: [ConfigService, DomainsService, DomainsRepository],
  exports: [MongooseModule, DomainsRepository],
})
export class DomainsModule {}
