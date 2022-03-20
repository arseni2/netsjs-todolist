import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProjectEntity} from "../../project/entities/project.entity";
import {TaskEntity} from "../../task/entities/task.entity";


@Entity('section')
export class SectionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @ManyToOne(() => ProjectEntity, project => project.sections, {onDelete: 'CASCADE'})
    //@JoinColumn({name: 'project_id'})
    project: ProjectEntity

    @OneToMany(() => TaskEntity, task => task.section)
    tasks: TaskEntity[];
}
