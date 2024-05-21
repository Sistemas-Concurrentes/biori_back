import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class EventGroupDto {
  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  groupId: number;

  @IsNotEmpty()
  groupName: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;

  constructor(json: any) {
    this.eventId = json.event_id;
    this.groupId = json.group_id;
    this.groupName = json.name;

    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;

  }
}