"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.SectionController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var SectionController = /** @class */ (function () {
    function SectionController(sectionService) {
        this.sectionService = sectionService;
    }
    SectionController.prototype.create = function (createSectionDto) {
        return this.sectionService.create(createSectionDto);
    };
    SectionController.prototype.update = function (id, updateSectionDto) {
        return this.sectionService.update(id, updateSectionDto);
    };
    SectionController.prototype.remove = function (id) {
        return this.sectionService.remove(id);
    };
    __decorate([
        (0, common_1.Post)('create'),
        __param(0, (0, common_1.Body)())
    ], SectionController.prototype, "create");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SectionController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SectionController.prototype, "remove");
    SectionController = __decorate([
        (0, common_1.Controller)('section'),
        (0, swagger_1.ApiTags)('section')
    ], SectionController);
    return SectionController;
}());
exports.SectionController = SectionController;
