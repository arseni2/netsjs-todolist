import {Module} from '@nestjs/common';
import {ProjectService} from './project.service';
import {ProjectController} from './project.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProjectEntity} from "./entities/project.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
