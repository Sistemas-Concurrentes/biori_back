import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';
export class EventtagDto {
  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  tagId: number;

  @IsNotEmpty()
  tagTitle: string

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;


  constructor(json: any) {
    this.eventId = json.event_id;
    this.tagId = json.tag_id;
    this.tagTitle = json.tag_title;

    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;

  }
}