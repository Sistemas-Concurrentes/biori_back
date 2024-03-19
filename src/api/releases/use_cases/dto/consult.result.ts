
interface Advertisement{
  id: number;
  title: string;
  description: string;
  name_creator: string;
  user_id: number;
  last_update: string;
  groups_id: Array<number>;
}

interface Report{
  id: number;
  title: string;
  description: string;
  name_creator: string;
  user_id: number;
  last_update: string;
}

export interface ConsultResult{
  advertisements: Array<Advertisement>,
  reports: Array<Report>,
  user_name: string;
}