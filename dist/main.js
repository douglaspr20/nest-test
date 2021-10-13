"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const express_1 = require("express");
async function bootstrap() {
    const logger = new common_1.Logger('bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.use((0, express_1.json)());
    app.use((0, express_1.urlencoded)({ extended: true, limit: '1mb' }));
    const configService = app.get(config_1.ConfigService);
    app.enableCors();
    const port = configService.get('PORT');
    const server = await app.listen(port);
    logger.log(`Application running on port ${port}`);
    server.setTimeout(1800000);
}
bootstrap();
//# sourceMappingURL=main.js.map