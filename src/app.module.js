"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var project_module_1 = require("./project/project.module");
var project_entity_1 = require("./project/entities/project.entity");
var section_module_1 = require("./section/section.module");
var section_entity_1 = require("./section/entities/section.entity");
var task_module_1 = require("./task/task.module");
var task_entity_1 = require("./task/entities/task.entity");
var comment_module_1 = require("./comment/comment.module");
var comment_entity_1 = require("./comment/entities/comment.entity");
var files_module_1 = require("./files/files.module");
var platform_express_1 = require("@nestjs/platform-express");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: '123',
                    database: 'todoist',
                    entities: [project_entity_1.ProjectEntity, section_entity_1.SectionEntity, task_entity_1.TaskEntity, comment_entity_1.CommentEntity],
                    synchronize: true,
                    autoLoadEntities: true
                }),
                project_module_1.ProjectModule,
                section_module_1.SectionModule,
                task_module_1.TaskModule,
                comment_module_1.CommentModule,
                files_module_1.FilesModule,
                platform_express_1.MulterModule.register({
                    dest: './images'
                }),
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
