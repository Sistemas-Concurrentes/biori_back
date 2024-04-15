import { IsNotEmpty } from 'class-validator';
import { EventDatesDto } from '../dto/eventdates.dto';

export class EventDatesModel {
  @IsNotEmpty()
  eventDates: Map <number, Date[]>;

  constructor(eventDatesDto: EventDatesDto[]) {
    this.eventDates = new Map();
    eventDatesDto.forEach((eventDatesDto) => {
      if(!this.eventDates.has(eventDatesDto.eventId)){
        this.eventDates.set(eventDatesDto.eventId, [eventDatesDto.dateEvent]);
      } else {
        this.eventDates.get(eventDatesDto.eventId).push(eventDatesDto.dateEvent);
      }
    });
  }
}