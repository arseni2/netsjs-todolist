import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {TaskEntity} from "../../task/entities/task.entity";


@Entity('comment')
export class CommentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    text?: string

    @ManyToOne(() => TaskEntity, task => task.comments, {nullable: false, createForeignKeyConstraints: false})
    @JoinColumn({
        name: 'task_id'
    })
    task: TaskEntity

    @Column({select: false})
    task_id?: string

    @CreateDateColumn({type: 'timestamptz'})
    createdAt: Date
}
