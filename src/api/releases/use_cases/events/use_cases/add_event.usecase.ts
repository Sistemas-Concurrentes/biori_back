import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {
  EventEnum,
  EventTable,
} from '../../../../../datasource/db/eventtable/eventtable.usecase';
import {AddEventDto} from '../controller/dto/event.dto';
import {EventDto} from '../../../../../datasource/db/eventtable/dto/event.dto';
import {
  TeacherTable,
} from '../../../../../datasource/db/usertable/teacherTable.usecase';
import {AddEventResult} from './dto/add_event.result';

@Injectable()
export class AddEventUsecase {

  constructor(
      private eventTable: EventTable,
      private teacherTable: TeacherTable) {
  }

  async run(
    addEventDto: AddEventDto, userId: number,
    eventType: EventEnum): Promise<AddEventResult> {
    const teacherId: number = await this.teacherTable.getUserIdByTeacherId(
        userId);
    if (teacherId == 0) {
      throw new HttpException('Teacher not found', HttpStatus.FORBIDDEN);
    }

    const eventDto: EventDto = {
      titulo: addEventDto.titulo,
      categoria: addEventDto.categoria,
      descripcion: addEventDto.descripcion,
      teacherId: teacherId,
      localizacion: addEventDto.localizacion,
      fechaFinInscripcion: addEventDto.fechaFinInscripcion,
      fechas: addEventDto.fechas.map(fecha => new Date(fecha)),
      associatedIds: addEventDto.associatedIds,
    };
    await this.eventTable.createEvent(eventDto, eventType);

    return {
      titulo: addEventDto.titulo,
    };
  }
}
