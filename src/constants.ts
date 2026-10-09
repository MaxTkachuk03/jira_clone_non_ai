import type { CommonTypes } from "./types/models";

export const COLUMN_TYPES: CommonTypes[] = [
  { id: "TO_DO", label: "To Do", },
  { id: "IN_PROGRESS", label: "In Progress" },
  { id: "DONE", label: "Done" },
];


export enum TASK_TYPES {
  BUG = "bug",
  TASK = "task",
  IDEA = "idea"
}

export enum TASK_STATE {
  toDO = "To Do",
  in_Progress = "in Progress",
  done = "Done"
}