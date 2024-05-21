import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';
import { TagModel } from '../../tagtable/model/tag.model';
import { GroupModel } from '../../grouptable/model/group.model';

export class EventModel {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  organiser: number;

  @IsNotEmpty()
  organiserName: string;

  @IsNotEmpty()
  dates: Date[];

  tags: TagModel[];
  groups: GroupModel[];

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  likes: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;

  dateEndInscription: Date ;

  constructor(
    json: any, dates: Date[], tags: TagModel[] = [],
    groups: GroupModel[] = []) {
    this.id = json.id;
    this.title = json.title;
    this.category = json.category;
    this.description = json.description;
    this.organiser = json.organiser;
    this.organiserName = json.organiser_name + ' ' + json.organiser_surname;
    this.dates = dates;
    this.tags = tags;
    this.groups = groups;
    this.location = json.location;
    this.likes = Number(json.likes_count);
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;

    this.dateEndInscription = json.date_end_inscription;
  }
}