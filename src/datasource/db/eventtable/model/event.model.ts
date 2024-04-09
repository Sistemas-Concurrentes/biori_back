import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';
import { TagModel } from '../../tagtable/model/tag.model';

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

  //@IsNotEmpty() hasta que no tenga los tags no puedo asegurar que tienen
  tags: TagModel[];

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


  constructor(json: any, dates: Date[], tags: TagModel[] = []) {
    this.id = json.id;
    this.title = json.title;
    this.category = json.category;
    this.description = json.description;
    this.organiser = json.organiser;
    this.organiserName = json.organiser_name + ' ' + json.organiser_surname;
    this.dates = dates;
    this.tags = tags;
    this.location = json.location;
    this.likes = Number(json.likes_count);
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;

    this.dateEndInscription = json.date_end_inscription;
  }
}