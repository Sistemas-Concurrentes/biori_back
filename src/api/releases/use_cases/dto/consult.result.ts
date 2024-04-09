import { Group } from '../../../../datasource/db/advertisementtable/model/groupadvertisement.model';
import { TagModel } from '../../../../datasource/db/tagtable/model/tag.model';

interface Advertisement{
  id: number;
  title: string;
  description: string;
  userName: string;
  userId: number;
  updatedAt: Date;
  groups: Group[];
}

interface Report{
  id: number;
  title: string;
  description: string;
  teacherName: string;
  teacherId: number;
  updatedAt: Date;
}

interface Event{
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

export interface ConsultResult{
  advertisements: Advertisement[],
  reports: Report[],
  events: Event[]
}