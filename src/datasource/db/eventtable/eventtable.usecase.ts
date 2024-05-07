import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { EventModel } from './model/event.model';
import { EventDatesTable } from './event_datestable/event_datestable.usecase';
import { EventTagTable } from './event_tagtable/event_tagtable.usecase';
import {EventDto} from './dto/event.dto';


@Injectable()
export class EventTable {
  constructor(private dbConnection: DbConnection,
              private eventDatesTable: EventDatesTable,
              private eventTagTable: EventTagTable) {
  }

  async getAll(): Promise<EventModel[]> {

    const query = 'SELECT e.*, r.date_end_inscription, COALESCE(l.likes_count, 0) as likes_count, u.name as organiser_name, u.surname as organiser_surname ' +
      'FROM event e ' +
      'LEFT JOIN event_with_register r on e.id = r.id_event ' +
      'LEFT JOIN (' +
        'SELECT event_id, COUNT(DISTINCT student_id) as likes_count ' +
        'FROM likes_student_event ' +
        'WHERE is_followed=true ' +
        'GROUP BY event_id' +
      ') l on e.id = l.event_id ' +
      'INNER JOIN teacher t on e.organiser = t.id ' +
      'INNER JOIN user u on t.user_id = u.id;';

    const events = await this.dbConnection.runQuery(query);
    const dates = await this.eventDatesTable.getAll();

    const tags = await this.eventTagTable.getAll();

    return events.map((event: any) => {
      return new EventModel(event, dates.eventDates.get(event.id), tags.tagModels.get(event.id));
    });
  }

  async createEvent(event: EventDto): Promise<void> {
    try {
      const query = 'INSERT INTO event (title, category, description, organiser, location) ' +
          'VALUES (?, ?, ?, ?, ?);';

      const values = [
        event.titulo, event.categoria, event.descripcion, event.teacherId,
        event.localizacion];
      const result = await this.dbConnection.runQuery(query, values);

      const eventId = result.insertId;
      await this.eventDatesTable.createEventDates(eventId, event.fechas);
      await this.eventTagTable.asignTagsToEvent(eventId, event.tagsButtons);

      if (event.fechaFinInscripcion) {
        const query = 'INSERT INTO event_with_register (id_event, date_end_inscription) VALUES (?, ?)';
        await this.dbConnection.runQuery(query,
            [eventId, event.fechaFinInscripcion]);
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}