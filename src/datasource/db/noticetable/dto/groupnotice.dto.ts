import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class GroupnoticeDto {
  @IsNotEmpty()
  groupId: number;

  @IsNotEmpty()
  groupName: string;

  @IsNotEmpty()
  noticeId: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;


  constructor(json: any) {
    this.groupId = json.group_id;
    this.groupName = json.name;
    this.noticeId = json.notice_id;
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;
  };
}