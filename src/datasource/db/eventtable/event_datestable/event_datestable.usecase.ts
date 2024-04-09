import { Injectable } from '@nestjs/common';
import { DbConnection } from '../../db.connection';
import { EventDatesModel } from './model/eventdates.model';
import { EventDatesDto } from './dto/eventdates.dto';


@Injectable()
export class EventDatesTable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<EventDatesModel> {
    const query = 'SELECT * FROM event_dates';
    const eventDatesJson = await this.dbConnection.runQuery(query);

    const eventDatesDtos =  eventDatesJson.map((eventDateJson: any) => {
      return new EventDatesDto(eventDateJson);
    });

    return new EventDatesModel(eventDatesDtos);
  }

}