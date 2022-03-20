import {ApiProperty} from "@nestjs/swagger";

export class CreateSectionDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    project_id: string
}
