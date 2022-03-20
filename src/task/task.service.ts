import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TaskEntity} from "./entities/task.entity";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        private repository: Repository<TaskEntity>,
    ) {}

    async create(createTaskDto: CreateTaskDto) {
        let task = await this.repository.save({
            project: {id: createTaskDto.project_id},
            section: {id: createTaskDto.section_id ?? null},
            ...createTaskDto
        })
        delete task.project
        delete task.section
        delete task.project_id
        delete task.section_id
        return task
    }

    // findAll() {
    //     return this.repository.find({relations: ['section']});
    // }

    findOne(id: string) {
        return this.repository.findOne(id, {relations: ['comments']});
    }

    async update(id: string, updateTaskDto: UpdateTaskDto) {
        const task = await this.repository.update(id, updateTaskDto)
        if (task.affected === 0) throw new NotFoundException('not found task')
        return this.repository.findOne(id);
    }

    async remove(id: string) {
        const task = await this.repository.findOne(id)
        if(!task) throw new NotFoundException('not found task')
        return this.repository.delete({id});
    }
}
