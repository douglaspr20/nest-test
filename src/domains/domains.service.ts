import { Injectable } from '@nestjs/common';
import { DomainDto } from './dto/domain.dto';
import { DomainsRepository } from './repositories/domains.repository';
import { Domain } from './schema/domain.schema';

@Injectable()
export class DomainsService {
  constructor(private domainsRepository: DomainsRepository) {}

  async createDomain(domainDto: DomainDto): Promise<Domain> {
    return await this.domainsRepository.createDomain(domainDto);
  }

  async getDomains(paginated: number, limit: number): Promise<Domain[]> {
    return await this.domainsRepository.getDomains(paginated, limit);
  }

  async updateDomains(domainId: string, domainDto: DomainDto): Promise<Domain> {
    return await this.domainsRepository.updateDomains(domainId, domainDto);
  }

  async getDomainsByOwner(ownerId: string): Promise<Domain[]> {
    return await this.domainsRepository.getDomainsByOwner(ownerId);
  }

  async searchDomain(search: string): Promise<Domain[]> {
    return await this.domainsRepository.searchDomain(search);
  }
}
