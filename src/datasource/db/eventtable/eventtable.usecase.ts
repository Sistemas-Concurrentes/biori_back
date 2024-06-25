import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { EventModel } from './model/event.model';
import { EventDatesTable } from './event_datestable/event_datestable.usecase';
import { EventGroupTable } from './event_grouptable/event_grouptable.usecase';
import {EventDto} from './dto/event.dto';
import {RegisteredTable} from '../registeredtable/registeredtable.usecase';
import { EventTagTable } from './event_tagtable/event_tagtable.usecase';

export enum EventEnum {
  tagEvent,
  groupEvent
}

@Injectable()
export class EventTable {
  constructor(private dbConnection: DbConnection,
              private eventDatesTable: EventDatesTable,
              private eventGroupTable: EventGroupTable,
              private eventTagTable: EventTagTable,
              private registeredTable: RegisteredTable) {
  }

  async getAll(user_id: number): Promise<EventModel[]> {

    const query = 'SELECT e.*, r.date_end_inscription, COALESCE(l.likes_count, 0) as likes_count,' +
      'u.name as organiser_name, u.surname as organiser_surname, ' +
      'IF(l.user_followed > 0, TRUE, FALSE) as user_followed, ' +
      'IF(ew.user_registered > 0, TRUE, FALSE) as user_registered ' +
      'FROM event e ' +
      'LEFT JOIN event_with_register r on e.id = r.id_event ' +
      'LEFT JOIN ( ' +
      'SELECT event_id, COUNT(DISTINCT user_id) as likes_count, ' +
      'COUNT(DISTINCT IF(user_id = ?, user_id, NULL)) as user_followed ' +
      'FROM likes_user_event ' +
      'WHERE is_followed=true ' +
      'GROUP BY event_id ' +
      ') l on e.id = l.event_id ' +
      'LEFT JOIN ( ' +
      'select ur.user_id as user_registered, ewr.id_event from user_registered ur ' +
      'inner join biori_new.event_with_register ewr on ur.event_registered_id = ewr.id ' +
      'where user_id = ? ' +
      ') ew on ew.id_event = e.id ' +
      'INNER JOIN user u on e.organiser = u.id;'
    const events = await this.dbConnection.runQuery(query, [user_id, user_id]);
    const dates = await this.eventDatesTable.getAll();

    const tags = await this.eventTagTable.getAll();
    const groups = await this.eventGroupTable.getAll();
    return events.map((event: any) => {
      return new EventModel(event, dates.eventDates.get(event.id),
        tags.tagModels.get(event.id), groups.groupModel.get(event.id));
    });
  }

  async createEvent(
    event: EventDto, eventType: EventEnum = EventEnum.tagEvent): Promise<void> {
    try {
      const query = 'INSERT INTO event (title, category, description, organiser, location) ' +
          'VALUES (?, ?, ?, ?, ?);';

      const values = [
        event.titulo, event.categoria, event.descripcion, event.teacherId,
        event.localizacion];
      const result = await this.dbConnection.runQuery(query, values);

      const eventId = result.insertId;
      await this.eventDatesTable.createEventDates(eventId, event.fechas);

      if (eventType == EventEnum.tagEvent) {
        await this.eventTagTable.asignTagsToEvent(eventId, event.associatedIds);
      } else if (eventType == EventEnum.groupEvent) {
        await this.eventGroupTable.asignGroupToEvent(eventId,
          event.associatedIds);
      }

      if (event.fechaFinInscripcion) {
        await this.registeredTable.insertRegisterEvent(eventId,
            event.fechaFinInscripcion);
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}