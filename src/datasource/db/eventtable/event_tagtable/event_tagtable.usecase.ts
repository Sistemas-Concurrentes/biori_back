import { Injectable } from '@nestjs/common';
import { DbConnection } from '../../db.connection';
import { EventTagModel } from './model/eventtag.model';
import { EventtagDto } from './dto/eventtag.dto';


@Injectable()
export class EventTagTable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<EventTagModel> {
    const query = 'SELECT et.*, t.tag_title FROM biori.event_tag et ' +
      'INNER JOIN tag t on et.tag_id = t.id;';
    const eventDatesJson = await this.dbConnection.runQuery(query);

    const eventTagDtos = eventDatesJson.map((eventDateJson: any) => {
      return new EventtagDto(eventDateJson);
    });

    return new EventTagModel(eventTagDtos);
  }
}