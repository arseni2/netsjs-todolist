import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import {ApiTags} from "@nestjs/swagger";

@Controller('project')
@ApiTags('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Post('duplicate')
  duplicate(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.duplicate(createProjectDto);
  }

  @Get('all')
  findAll() {
    return this.projectService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }

  @Get(':id')
  detail(@Param('id') id: string) {
    return this.projectService.findOne(id)
  }
}
