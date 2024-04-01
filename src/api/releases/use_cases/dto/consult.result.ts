import { Group } from '../../../../datasource/db/advertisementtable/model/groupadvertisement.model';

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

export interface ConsultResult{
  advertisements: Array<Advertisement>,
  reports: Array<Report>,
}