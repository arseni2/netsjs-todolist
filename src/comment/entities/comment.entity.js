"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommentEntity = void 0;
var typeorm_1 = require("typeorm");
var task_entity_1 = require("../../task/entities/task.entity");
var file_entity_1 = require("../../files/entities/file.entity");
var CommentEntity = /** @class */ (function () {
    function CommentEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], CommentEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CommentEntity.prototype, "text");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return task_entity_1.TaskEntity; }, function (task) { return task.comments; }, { nullable: false, createForeignKeyConstraints: false }),
        (0, typeorm_1.JoinColumn)({
            name: 'task_id'
        })
    ], CommentEntity.prototype, "task");
    __decorate([
        (0, typeorm_1.Column)({ select: false })
    ], CommentEntity.prototype, "task_id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' })
    ], CommentEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return file_entity_1.FileEntity; }, function (file) { return file.comment_id; }, { nullable: true })
    ], CommentEntity.prototype, "files");
    CommentEntity = __decorate([
        (0, typeorm_1.Entity)('comment')
    ], CommentEntity);
    return CommentEntity;
}());
exports.CommentEntity = CommentEntity;
