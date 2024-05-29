import { IsNotEmpty } from 'class-validator';
import { EventGroupDto } from '../dto/eventGroupDto';
import { GroupModel } from '../../../grouptable/model/group.model';

export class EventGroupModel {
  @IsNotEmpty()
  groupModel: Map<number, GroupModel[]>;

  constructor(eventGroupDtos: EventGroupDto[]) {
    this.groupModel = new Map();
    eventGroupDtos.forEach((eventGroupDto) => {
      const groupModel = new GroupModel(eventGroupDto.groupId,
        eventGroupDto.groupName);

      if (!this.groupModel.has(eventGroupDto.eventId)) {
        this.groupModel.set(eventGroupDto.eventId, [groupModel]);
      } else {
        this.groupModel.get(eventGroupDto.eventId).push(groupModel);
      }
    });
  }
}