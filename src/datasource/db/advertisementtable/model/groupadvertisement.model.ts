import { IsNotEmpty } from 'class-validator';
import { GroupadvertisementDto } from '../dto/groupadvertisement.dto';

export class GroupAdvertisementModel {
  @IsNotEmpty()
  groupAdvertisements: Map<number, Array<[number,string]>>;

  constructor(groupAdvDto: Array<GroupadvertisementDto>) {
    this.groupAdvertisements = new Map<number, Array<[number,string]>>();

    groupAdvDto.forEach((groupAdvDto) => {
      const actualTuple:[number, string] = [groupAdvDto.groupId, groupAdvDto.groupName];
      if (!this.groupAdvertisements.has(groupAdvDto.advertisementId)) {
        this.groupAdvertisements.set(groupAdvDto.advertisementId, [actualTuple]);
      }
      else {
        this.groupAdvertisements.get(groupAdvDto.advertisementId).push(actualTuple);
      }
    });

  };
}