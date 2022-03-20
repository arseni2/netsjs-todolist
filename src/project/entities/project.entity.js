"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectEntity = void 0;
var typeorm_1 = require("typeorm");
var section_entity_1 = require("../../section/entities/section.entity");
var task_entity_1 = require("../../task/entities/task.entity");
var ProjectEntity = /** @class */ (function () {
    function ProjectEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], ProjectEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true })
    ], ProjectEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], ProjectEntity.prototype, "color");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return section_entity_1.SectionEntity; }, function (Section) { return Section.project; })
    ], ProjectEntity.prototype, "sections");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return task_entity_1.TaskEntity; }, function (task) { return task.project; })
    ], ProjectEntity.prototype, "tasks");
    ProjectEntity = __decorate([
        (0, typeorm_1.Entity)('project')
    ], ProjectEntity);
    return ProjectEntity;
}());
exports.ProjectEntity = ProjectEntity;
