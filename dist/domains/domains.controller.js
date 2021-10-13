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
exports.DomainsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const domains_service_1 = require("./domains.service");
const domain_dto_1 = require("./dto/domain.dto");
let DomainsController = class DomainsController {
    constructor(domainsService) {
        this.domainsService = domainsService;
    }
    async createDomain(domainDto) {
        const domainCreated = await this.domainsService.createDomain(domainDto);
        return {
            message: 'domains created succesfully.',
            domainCreated,
            statusCode: 201,
        };
    }
    async getDomains(paginated, limit) {
        const domains = await this.domainsService.getDomains(paginated, limit);
        return {
            message: 'domains returned succesfully.',
            domains,
            statusCode: 200,
        };
    }
    async updateDomains(domainId, domainDto) {
        const updatedDomain = await this.domainsService.updateDomains(domainId, domainDto);
        return {
            message: 'domains updated succesfully.',
            updatedDomain,
            statusCode: 203,
        };
    }
    async getDomainsByOwner(ownerId) {
        const domainsByOwner = await this.domainsService.getDomainsByOwner(ownerId);
        return {
            message: 'domains by owener returned succesfully.',
            domains: domainsByOwner,
            statusCode: 200,
        };
    }
    async searchDomain(search) {
        const domains = await this.domainsService.searchDomain(search);
        return {
            message: 'domains returned succesfully.',
            domains,
            statusCode: 200,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'domains created succesfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Error en la información enviada.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'No autorizado.',
    }),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [domain_dto_1.DomainDto]),
    __metadata("design:returntype", Promise)
], DomainsController.prototype, "createDomain", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'domains returned succesfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Error en la información enviada.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'No autorizado.',
    }),
    __param(0, (0, common_1.Query)('p')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], DomainsController.prototype, "getDomains", null);
__decorate([
    (0, common_1.Put)(':domainId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'domain updated succesfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Error en la información enviada.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'No autorizado.',
    }),
    __param(0, (0, common_1.Param)('domainId')),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, domain_dto_1.DomainDto]),
    __metadata("design:returntype", Promise)
], DomainsController.prototype, "updateDomains", null);
__decorate([
    (0, common_1.Get)('byOwner/:ownerId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'domain returned succesfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Error en la información enviada.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'No autorizado.',
    }),
    __param(0, (0, common_1.Param)('ownerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DomainsController.prototype, "getDomainsByOwner", null);
__decorate([
    (0, common_1.Post)('search'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'domain returned succesfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Error en la información enviada.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'No autorizado.',
    }),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DomainsController.prototype, "searchDomain", null);
DomainsController = __decorate([
    (0, common_1.Controller)('domains'),
    __metadata("design:paramtypes", [domains_service_1.DomainsService])
], DomainsController);
exports.DomainsController = DomainsController;
//# sourceMappingURL=domains.controller.js.map