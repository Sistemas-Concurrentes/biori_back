import { IsNotEmpty } from 'class-validator';
import { GroupadvertisementDto } from '../dto/groupadvertisement.dto';

export class Group {
  constructor(public id: number, public name: string) {}
}

export class GroupAdvertisementModel {
  @IsNotEmpty()
  groupAdvertisements: Map<number, Group[]>;

  constructor(groupAdvDto: GroupadvertisementDto[]) {
    this.groupAdvertisements = new Map<number, Group[]>();

    groupAdvDto.forEach((groupAdvDto) => {
      const newGroup = new Group(groupAdvDto.groupId, groupAdvDto.groupName);
      if (!this.groupAdvertisements.has(groupAdvDto.advertisementId)) {
        this.groupAdvertisements.set(groupAdvDto.advertisementId,[newGroup]);
      }
      else {
        this.groupAdvertisements.get(groupAdvDto.advertisementId).push(newGroup);
      }
    });

  };
}