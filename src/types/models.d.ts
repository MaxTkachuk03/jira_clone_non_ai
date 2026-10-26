export interface CommonTypes {
  id: string;
  label: string;
}

export interface TaskType {
  id: string;
  title: string;
  type: string;
  priority: string;
  assignee: string;
  state: string;
  rank: number;
}
