import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { Domain } from '../schema/domain.schema';
import { DomainDto } from '../dto/domain.dto';
export declare class DomainsRepository {
    private domainModel;
    private configService;
    private logger;
    constructor(domainModel: Model<Domain>, configService: ConfigService);
    createDomain(domainDto: DomainDto): Promise<Domain>;
    getDomains(paginated: number, limit: number): Promise<Domain[]>;
    updateDomains(domainId: string, domainDto: DomainDto): Promise<Domain>;
    getDomainsByOwner(ownerId: string): Promise<Domain[]>;
    searchDomain(search: string): Promise<Domain[]>;
}
