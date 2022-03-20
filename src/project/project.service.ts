import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateProjectDto} from './dto/create-project.dto';
import {UpdateProjectDto} from './dto/update-project.dto';
import {ProjectEntity} from "./entities/project.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ProjectService {
  constructor(
      @InjectRepository(ProjectEntity)
      private repository: Repository<ProjectEntity>,
  ) {}
  create(createProjectDto: CreateProjectDto) {
    return this.repository.save(createProjectDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id, { relations: ['sections', 'tasks', 'sections.tasks'] })
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.repository.update(id, updateProjectDto)
    if(project.affected === 0) throw new NotFoundException('not found project')
    return this.repository.findOne(id, {relations: ['sections', 'tasks']});
  }

  duplicate(createProjectDto: CreateProjectDto) {
      createProjectDto.name += ' copy'
      return this.repository.save(createProjectDto);
  }

  async remove(id: string) {
    // const project = await this.repository.findOne(id)
    // if(!project) throw new NotFoundException('not found project')
    return this.repository.delete(id);
  }
}
