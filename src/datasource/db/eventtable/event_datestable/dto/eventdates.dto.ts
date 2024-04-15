import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';
export class EventDatesDto {
  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  dateEvent: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;


  constructor(json: any) {
    this.eventId = json.event_id;
    this.dateEvent = json.dates_event;

    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;

  }
}