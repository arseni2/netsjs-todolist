import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CommentEntity} from "./entities/comment.entity";


@Injectable()
export class CommentService {
  constructor(
      @InjectRepository(CommentEntity)
      private repository: Repository<CommentEntity>,
  ) {}
  create(createCommentDto: CreateCommentDto) {
    return this.repository.save(createCommentDto);
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.repository.update(id, updateCommentDto)
    if (comment.affected === 0) throw new NotFoundException('not found comment')
    return this.repository.findOne(id);
  }

  async remove(id: string) {
    const comment = await this.repository.findOne(id)
    if (!comment) throw new NotFoundException('not found comment')
    return this.repository.delete(id);
  }
}
