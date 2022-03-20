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
exports.TaskController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var TaskController = /** @class */ (function () {
    function TaskController(taskService) {
        this.taskService = taskService;
    }
    TaskController.prototype.create = function (createTaskDto) {
        return this.taskService.create(createTaskDto);
    };
    // @Get('all')
    // findAll() {
    //   return this.taskService.findAll();
    // }
    TaskController.prototype.findOne = function (id) {
        return this.taskService.findOne(id);
    };
    TaskController.prototype.update = function (id, updateTaskDto) {
        return this.taskService.update(id, updateTaskDto);
    };
    TaskController.prototype.remove = function (id) {
        return this.taskService.remove(id);
    };
    __decorate([
        (0, common_1.Post)('create'),
        __param(0, (0, common_1.Body)())
    ], TaskController.prototype, "create");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TaskController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], TaskController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TaskController.prototype, "remove");
    TaskController = __decorate([
        (0, common_1.Controller)('task'),
        (0, swagger_1.ApiTags)('task')
    ], TaskController);
    return TaskController;
}());
exports.TaskController = TaskController;
