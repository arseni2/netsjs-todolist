import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ProjectModule} from './project/project.module';
import {ProjectEntity} from "./project/entities/project.entity";
import {SectionModule} from './section/section.module';
import {SectionEntity} from "./section/entities/section.entity";
import {TaskModule} from './task/task.module';
import {TaskEntity} from "./task/entities/task.entity";
import {CommentModule} from './comment/comment.module';
import {CommentEntity} from "./comment/entities/comment.entity";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'todoist',
      entities: [ProjectEntity, SectionEntity, TaskEntity, CommentEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProjectModule,
    SectionModule,
    TaskModule,
    CommentModule,
  ]
})
export class AppModule {}
