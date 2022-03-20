import {ApiProperty} from "@nestjs/swagger";

export class CreateCommentDto {
    @ApiProperty({required: false})
    text?: string

    @ApiProperty({required: true})
    task_id: string
}
