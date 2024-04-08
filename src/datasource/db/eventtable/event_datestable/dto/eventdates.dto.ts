import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';
export class EventDatesDto {
  @IsNotEmpty()
  event_id: number;

  @IsNotEmpty()
  date_event: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;


  constructor(json: any) {
    this.event_id = json.event_id;
    this.date_event = json.date_event;

    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;

  }
}