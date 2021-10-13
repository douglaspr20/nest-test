"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainsModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const domains_controller_1 = require("./domains.controller");
const domains_service_1 = require("./domains.service");
const domains_repository_1 = require("./repositories/domains.repository");
const domain_schema_1 = require("./schema/domain.schema");
let DomainsModule = class DomainsModule {
};
DomainsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: domain_schema_1.Domain.name, schema: domain_schema_1.DomainSchema }]),
        ],
        controllers: [domains_controller_1.DomainsController],
        providers: [config_1.ConfigService, domains_service_1.DomainsService, domains_repository_1.DomainsRepository],
        exports: [mongoose_1.MongooseModule, domains_repository_1.DomainsRepository],
    })
], DomainsModule);
exports.DomainsModule = DomainsModule;
//# sourceMappingURL=domains.module.js.map