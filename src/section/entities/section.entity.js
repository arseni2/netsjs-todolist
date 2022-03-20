"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SectionEntity = void 0;
var typeorm_1 = require("typeorm");
var project_entity_1 = require("../../project/entities/project.entity");
var task_entity_1 = require("../../task/entities/task.entity");
var SectionEntity = /** @class */ (function () {
    function SectionEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], SectionEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], SectionEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return project_entity_1.ProjectEntity; }, function (project) { return project.sections; })
    ], SectionEntity.prototype, "project");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return task_entity_1.TaskEntity; }, function (task) { return task.section; })
    ], SectionEntity.prototype, "tasks");
    SectionEntity = __decorate([
        (0, typeorm_1.Entity)('section')
    ], SectionEntity);
    return SectionEntity;
}());
exports.SectionEntity = SectionEntity;
