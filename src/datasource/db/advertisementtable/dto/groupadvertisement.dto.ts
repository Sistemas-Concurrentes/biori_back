import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class GroupadvertisementDto {
  @IsNotEmpty()
  groupId: number;

  @IsNotEmpty()
  groupName: string;

  @IsNotEmpty()
  advertisementId: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;


  constructor(json: any) {
    this.groupId = json.group_id;
    this.groupName = json.name;
    this.advertisementId = json.advertisement_id;
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;
  };
}