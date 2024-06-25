import { IsNotEmpty } from 'class-validator';
import { GroupnoticeDto } from '../dto/groupnotice.dto';

export class Group {
  constructor(public id: number, public name: string) {}
}

export class GroupnoticeModel {
  @IsNotEmpty()
  groupAdvertisements: Map<number, Group[]>;

  constructor(groupAdvDto: GroupnoticeDto[]) {
    this.groupAdvertisements = new Map<number, Group[]>();

    groupAdvDto.forEach((groupAdvDto) => {
      const newGroup = new Group(groupAdvDto.groupId, groupAdvDto.groupName);
      if (!this.groupAdvertisements.has(groupAdvDto.noticeId)) {
        this.groupAdvertisements.set(groupAdvDto.noticeId, [newGroup]);
      }
      else {
        this.groupAdvertisements.get(groupAdvDto.noticeId).push(newGroup);
      }
    });

  };
}