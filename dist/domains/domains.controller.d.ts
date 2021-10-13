import { DomainsService } from './domains.service';
import { DomainDto } from './dto/domain.dto';
export declare class DomainsController {
    private domainsService;
    constructor(domainsService: DomainsService);
    createDomain(domainDto: DomainDto): Promise<{
        message: string;
        domainCreated: import("./schema/domain.schema").Domain;
        statusCode: number;
    }>;
    getDomains(paginated: number, limit: number): Promise<{
        message: string;
        domains: import("./schema/domain.schema").Domain[];
        statusCode: number;
    }>;
    updateDomains(domainId: string, domainDto: DomainDto): Promise<{
        message: string;
        updatedDomain: import("./schema/domain.schema").Domain;
        statusCode: number;
    }>;
    getDomainsByOwner(ownerId: string): Promise<{
        message: string;
        domains: import("./schema/domain.schema").Domain[];
        statusCode: number;
    }>;
    searchDomain(search: string): Promise<{
        message: string;
        domains: import("./schema/domain.schema").Domain[];
        statusCode: number;
    }>;
}
