import {ApiProperty} from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty()
    title: string

    @ApiProperty()
    des: string

    @ApiProperty({type: 'date'})
    schedule: Date

    @ApiProperty({type: 'date'})
    reminder?: Date

    @ApiProperty()
    order?: number

    @ApiProperty()
    project_id: string

    @ApiProperty({required: false})
    section_id?: string
}
