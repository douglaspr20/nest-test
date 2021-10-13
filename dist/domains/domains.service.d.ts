import { DomainDto } from './dto/domain.dto';
import { DomainsRepository } from './repositories/domains.repository';
import { Domain } from './schema/domain.schema';
export declare class DomainsService {
    private domainsRepository;
    constructor(domainsRepository: DomainsRepository);
    createDomain(domainDto: DomainDto): Promise<Domain>;
    getDomains(paginated: number, limit: number): Promise<Domain[]>;
    updateDomains(domainId: string, domainDto: DomainDto): Promise<Domain>;
    getDomainsByOwner(ownerId: string): Promise<Domain[]>;
    searchDomain(search: string): Promise<Domain[]>;
}
