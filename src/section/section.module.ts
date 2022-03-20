import {Module} from '@nestjs/common';
import {SectionService} from './section.service';
import {SectionController} from './section.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SectionEntity} from "./entities/section.entity";

@Module({
  controllers: [SectionController],
  providers: [SectionService],
  imports: [TypeOrmModule.forFeature([SectionEntity])],
})
export class SectionModule {}
