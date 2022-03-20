import {Body, Controller, Delete, Param, Patch, Post} from '@nestjs/common';
import {SectionService} from './section.service';
import {CreateSectionDto} from './dto/create-section.dto';
import {UpdateSectionDto} from './dto/update-section.dto';
import {ApiTags} from "@nestjs/swagger";

@Controller('section')
@ApiTags('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post('create')
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.create(createSectionDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectionDto: UpdateSectionDto) {
    return this.sectionService.update(id, updateSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectionService.remove(id);
  }
}
