import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProjectEntity} from "../../project/entities/project.entity";
import {SectionEntity} from "../../section/entities/section.entity";
import {CommentEntity} from "../../comment/entities/comment.entity";

@Entity('task')
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    des: string

    @Column({type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
    schedule: Date

    @Column({type: 'timestamptz', nullable: true})
    reminder?: Date

    @Column({unique: true, generated: 'increment'})
    order: number

    @ManyToOne(() => ProjectEntity, project => project.tasks, {nullable: false, createForeignKeyConstraints: false})
    @JoinColumn({
        name: 'project_id'
    })
    project: ProjectEntity

    @Column()
    project_id: string

    @ManyToOne(() => SectionEntity, section => section.tasks, {nullable: true})
    @JoinColumn({
        name: 'section_id'
    })
    section?: SectionEntity

    @Column({nullable: true})
    section_id: string | null

    @OneToMany(() => CommentEntity, comment => comment.task, {nullable: true})
    comments?: TaskEntity[]
}
