import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateSectionDto} from './dto/create-section.dto';
import {UpdateSectionDto} from './dto/update-section.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {SectionEntity} from "./entities/section.entity";

@Injectable()
export class SectionService {
  constructor(
      @InjectRepository(SectionEntity)
      private repository: Repository<SectionEntity>,
  ) {}
  async create(createSectionDto: CreateSectionDto) {
    return await this.repository.save({
      name: createSectionDto.name,
      project: {id: createSectionDto.project_id}
    })
  }

  async update(id: string, updateSectionDto: UpdateSectionDto) {
    const section = await this.repository.update(id, updateSectionDto)
    if(section.affected === 0) throw new NotFoundException('not found section')
    return this.repository.findOne(id, {relations: ['tasks']});
  }

  async remove(id: string) {
    const section = await this.repository.findOne(id)
    if(!section) throw new NotFoundException('not found section')
    return this.repository.delete(id);
  }
}
