import { IsNotEmpty } from 'class-validator';
import { EventtagDto } from '../dto/eventtag.dto';
import { TagModel } from '../../../tagtable/model/tag.model';

export class EventTagModel {
  @IsNotEmpty()
  tagModels: Map<number, TagModel[]>;


  constructor(eventtagDtos: EventtagDto[]) {
    this.tagModels = new Map();
    eventtagDtos.forEach((eventtagDto) => {
      const tagModel = new TagModel(eventtagDto.tagId, eventtagDto.tagTitle);

      if (!this.tagModels.has(eventtagDto.eventId)) {
        this.tagModels.set(eventtagDto.eventId, [tagModel]);
      } else {
        this.tagModels.get(eventtagDto.eventId).push(tagModel);
      }
    });
  }
}