import {OmitType} from '@nestjs/swagger';
import {CreateSectionDto} from './create-section.dto';

export class UpdateSectionDto extends OmitType(CreateSectionDto, ['project_id']) {}
