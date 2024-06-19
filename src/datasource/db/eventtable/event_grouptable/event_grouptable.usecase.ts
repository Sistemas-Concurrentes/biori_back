import { Injectable } from '@nestjs/common';
import { DbConnection } from '../../db.connection';
import { EventGroupDto } from './dto/eventGroupDto';
import { EventGroupModel } from './model/eventGroupModel';

@Injectable()
export class EventGroupTable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<EventGroupModel> {
    const query = 'SELECT ge.*, CONCAT(g.name, " ", s.name) as name ' +
      'FROM group_event ge ' +
      'INNER JOIN `group` g on ge.group_id = g.id ' +
      'INNER JOIN `subject` s on g.subject = s.id ';
    const eventGroupJson = await this.dbConnection.runQuery(query);

    const eventGroupDto = eventGroupJson.map((eventGroupJson: any) => {
      return new EventGroupDto(eventGroupJson);
    });

    return new EventGroupModel(eventGroupDto);
  }


  async asignGroupToEvent(eventId: number, groupsId: number[]) {
    const placeholders = groupsId.map(() => '(?, ?)').join(', ');
    const query = `INSERT INTO group_event (event_id, group_id) VALUES ${placeholders}`;

    const values = groupsId.flatMap(groupId => [eventId, groupId]);
    return await this.dbConnection.runQuery(query, values);
  }
}