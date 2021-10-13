"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainsService = void 0;
const common_1 = require("@nestjs/common");
const domains_repository_1 = require("./repositories/domains.repository");
let DomainsService = class DomainsService {
    constructor(domainsRepository) {
        this.domainsRepository = domainsRepository;
    }
    async createDomain(domainDto) {
        return await this.domainsRepository.createDomain(domainDto);
    }
    async getDomains(paginated, limit) {
        return await this.domainsRepository.getDomains(paginated, limit);
    }
    async updateDomains(domainId, domainDto) {
        return await this.domainsRepository.updateDomains(domainId, domainDto);
    }
    async getDomainsByOwner(ownerId) {
        return await this.domainsRepository.getDomainsByOwner(ownerId);
    }
    async searchDomain(search) {
        return await this.domainsRepository.searchDomain(search);
    }
};
DomainsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [domains_repository_1.DomainsRepository])
], DomainsService);
exports.DomainsService = DomainsService;
//# sourceMappingURL=domains.service.js.map