import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {SectionEntity} from "../../section/entities/section.entity";
import {TaskEntity} from "../../task/entities/task.entity";

@Entity('project')
export class ProjectEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    name: string

    @Column()
    color: string

    @OneToMany(() => SectionEntity, Section => Section.project)
    sections: SectionEntity[];

    @OneToMany(() => TaskEntity, task => task.project)
    tasks: TaskEntity[];
}
