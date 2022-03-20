"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SectionModule = void 0;
var common_1 = require("@nestjs/common");
var section_service_1 = require("./section.service");
var section_controller_1 = require("./section.controller");
var typeorm_1 = require("@nestjs/typeorm");
var section_entity_1 = require("./entities/section.entity");
var SectionModule = /** @class */ (function () {
    function SectionModule() {
    }
    SectionModule = __decorate([
        (0, common_1.Module)({
            controllers: [section_controller_1.SectionController],
            providers: [section_service_1.SectionService],
            imports: [typeorm_1.TypeOrmModule.forFeature([section_entity_1.SectionEntity])]
        })
    ], SectionModule);
    return SectionModule;
}());
exports.SectionModule = SectionModule;
