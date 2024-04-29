import {Injectable} from '@nestjs/common';
import {EventTable} from '../../../datasource/db/eventtable/eventtable.usecase';
import {AddEventDto} from '../controller/dto/event.dto';
import {EventDto} from '../../../datasource/db/eventtable/dto/event.dto';
import {
  TeacherTable,
} from '../../../datasource/db/usertable/teacherTable.usecase';
import {TagModel} from '../../../datasource/db/tagtable/model/tag.model';

@Injectable()
export class AddEventUsecase {

  constructor(
      private eventTable: EventTable,
      private teacherTable: TeacherTable) {
  }

  async run(addEventDto: AddEventDto, userId: number): Promise<boolean> {
    const teacherId: number = await this.teacherTable.getUserIdByTeacherId(
        userId);
    if (teacherId == 0) {
      return false;
    }

    const eventDto: EventDto = {
      titulo: addEventDto.titulo,
      categoria: addEventDto.categoria,
      descripcion: addEventDto.descripcion,
      teacherId: teacherId,
      localizacion: addEventDto.localizacion,
      fechaFinInscripcion: addEventDto.fechaFinInscripcion,
      fechas: addEventDto.fechas.map(fecha => new Date(fecha)),
      tagsButtons: addEventDto.tagsButtons.map(tag => {
        return new TagModel(tag.id, tag.name);
      }),
    };
    await this.eventTable.createEvent(eventDto);

    return true;
  }
}
