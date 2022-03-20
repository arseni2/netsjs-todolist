import {ApiProperty} from "@nestjs/swagger";

export class CreateProjectDto {
    @ApiProperty()
    color: string

    @ApiProperty()
    name: string
}
