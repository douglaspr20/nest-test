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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const config_1 = require("@nestjs/config");
const domain_schema_1 = require("../schema/domain.schema");
let DomainsRepository = class DomainsRepository {
    constructor(domainModel, configService) {
        this.domainModel = domainModel;
        this.configService = configService;
        this.logger = new common_1.Logger(DomainsRepository.name);
    }
    async createDomain(domainDto) {
        try {
            const domainCreated = await this.domainModel.create(domainDto);
            return domainCreated;
        }
        catch (error) {
            this.logger.error(error.message);
            if (error.code === 11000) {
                throw new common_1.InternalServerErrorException('this domain has already been registered');
            }
            throw new common_1.InternalServerErrorException('there was a problem creating the domain');
        }
    }
    async getDomains(paginated, limit) {
        try {
            const domains = await this.domainModel
                .find({})
                .skip(paginated * limit)
                .limit(limit);
            return domains;
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async updateDomains(domainId, domainDto) {
        try {
            const updateDomains = await this.domainModel.findByIdAndUpdate(domainId, domainDto, { new: true });
            return updateDomains;
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async getDomainsByOwner(ownerId) {
        try {
            const domainsByOwner = await this.domainModel.find({ ownerId });
            return domainsByOwner;
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async searchDomain(search) {
        try {
            const domain = await this.domainModel.find({
                domainName: { $regex: search },
            });
            return domain;
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
};
DomainsRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(domain_schema_1.Domain.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], DomainsRepository);
exports.DomainsRepository = DomainsRepository;
//# sourceMappingURL=domains.repository.js.map