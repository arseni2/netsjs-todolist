"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskEntity = void 0;
var typeorm_1 = require("typeorm");
var project_entity_1 = require("../../project/entities/project.entity");
var section_entity_1 = require("../../section/entities/section.entity");
var comment_entity_1 = require("../../comment/entities/comment.entity");
var TaskEntity = /** @class */ (function () {
    function TaskEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], TaskEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], TaskEntity.prototype, "title");
    __decorate([
        (0, typeorm_1.Column)()
    ], TaskEntity.prototype, "des");
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamptz', "default": function () { return "CURRENT_TIMESTAMP"; } })
    ], TaskEntity.prototype, "schedule");
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true })
    ], TaskEntity.prototype, "reminder");
    __decorate([
        (0, typeorm_1.Column)({ unique: true, generated: 'increment' })
    ], TaskEntity.prototype, "order");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return project_entity_1.ProjectEntity; }, function (project) { return project.tasks; }, { nullable: false, createForeignKeyConstraints: false }),
        (0, typeorm_1.JoinColumn)({
            name: 'project_id'
        })
    ], TaskEntity.prototype, "project");
    __decorate([
        (0, typeorm_1.Column)()
    ], TaskEntity.prototype, "project_id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return section_entity_1.SectionEntity; }, function (section) { return section.tasks; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)({
            name: 'section_id'
        })
    ], TaskEntity.prototype, "section");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TaskEntity.prototype, "section_id");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return comment_entity_1.CommentEntity; }, function (comment) { return comment.task; }, { nullable: true })
    ], TaskEntity.prototype, "comments");
    TaskEntity = __decorate([
        (0, typeorm_1.Entity)('task')
    ], TaskEntity);
    return TaskEntity;
}());
exports.TaskEntity = TaskEntity;
