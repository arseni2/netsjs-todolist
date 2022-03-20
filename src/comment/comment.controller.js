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
exports.CommentController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var CommentController = /** @class */ (function () {
    function CommentController(commentService) {
        this.commentService = commentService;
    }
    CommentController.prototype.create = function (createCommentDto) {
        return this.commentService.create(createCommentDto);
    };
    CommentController.prototype.update = function (id, updateCommentDto) {
        return this.commentService.update(id, updateCommentDto);
    };
    CommentController.prototype.remove = function (id) {
        return this.commentService.remove(id);
    };
    __decorate([
        (0, common_1.Post)('create'),
        __param(0, (0, common_1.Body)())
    ], CommentController.prototype, "create");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CommentController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CommentController.prototype, "remove");
    CommentController = __decorate([
        (0, common_1.Controller)('comment'),
        (0, swagger_1.ApiTags)('comment')
    ], CommentController);
    return CommentController;
}());
exports.CommentController = CommentController;
