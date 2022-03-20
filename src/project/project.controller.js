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
exports.ProjectController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var ProjectController = /** @class */ (function () {
    function ProjectController(projectService) {
        this.projectService = projectService;
    }
    ProjectController.prototype.create = function (createProjectDto) {
        return this.projectService.create(createProjectDto);
    };
    ProjectController.prototype.findAll = function () {
        return this.projectService.findAll();
    };
    ProjectController.prototype.update = function (id, updateProjectDto) {
        return this.projectService.update(id, updateProjectDto);
    };
    ProjectController.prototype.remove = function (id) {
        return this.projectService.remove(id);
    };
    ProjectController.prototype.detail = function (id) {
        return this.projectService.findOne(id);
    };
    __decorate([
        (0, common_1.Post)('create'),
        __param(0, (0, common_1.Body)())
    ], ProjectController.prototype, "create");
    __decorate([
        (0, common_1.Get)('all')
    ], ProjectController.prototype, "findAll");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ProjectController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProjectController.prototype, "remove");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProjectController.prototype, "detail");
    ProjectController = __decorate([
        (0, common_1.Controller)('project'),
        (0, swagger_1.ApiTags)('project')
    ], ProjectController);
    return ProjectController;
}());
exports.ProjectController = ProjectController;
