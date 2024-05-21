import { Group } from '../../../../datasource/db/advertisementtable/model/groupadvertisement.model';
import { TagModel } from '../../../../datasource/db/tagtable/model/tag.model';
import {
  GroupModel,
} from '../../../../datasource/db/grouptable/model/group.model';

export interface Advertisement{
  id: number;
  title: string;
  description: string;
  userName: string;
  userId: number;
  updatedAt: Date;
  groups: Group[];
}

export interface Report{
  id: number;
  title: string;
  description: string;
  teacherName: string;
  teacherId: number;
  updatedAt: Date;
}

export interface Event{
  id: number;
  title: string;
  category: string;
  description: string;
  organiser: number;
  organiserName: string;
  dates: Date[];
  location: string;
  likes: number;
  tags: TagModel[];
  dateEndInscription: Date;
  updatedAt: Date;
}

export interface EventGroup {
  id: number;
  title: string;
  category: string;
  description: string;
  organiser: number;
  organiserName: string;
  dates: Date[];
  location: string;
  likes: number;
  groups: GroupModel[];
  dateEndInscription: Date;
  updatedAt: Date;
}

export interface ConsultResult{
  advertisements: Advertisement[],
  reports: Report[],
  events: Event[],
  eventsGroup: EventGroup[]
}