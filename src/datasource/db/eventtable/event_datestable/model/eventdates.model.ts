import { IsNotEmpty } from 'class-validator';
import { EventDatesDto } from '../dto/eventdates.dto';

export class EventDatesModel {
  @IsNotEmpty()
  eventDates: Date[];



  constructor(eventDatesDto: EventDatesDto[]) {
    eventDatesDto.forEach((eventDatesDto) => {
      this.eventDates.push(eventDatesDto.date_event);
    });
  }
}