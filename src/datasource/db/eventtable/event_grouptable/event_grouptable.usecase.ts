import { Injectable } from '@nestjs/common';
import { DbConnection } from '../../db.connection';

@Injectable()
export class EventGroupTable {
  constructor(private dbConnection: DbConnection) {
  }

  async asignGroupToEvent(eventId: number, groupsId: number[]) {
    const placeholders = groupsId.map(() => '(?, ?)').join(', ');
    const query = `INSERT INTO group_event (event_id, group_id) VALUES ${placeholders}`;

    const values = groupsId.flatMap(groupId => [eventId, groupId]);
    return await this.dbConnection.runQuery(query, values);
  }
}