import type { CommonTypes, TaskType } from "./types/models";

export const columns: CommonTypes[] = [
  { id: "TO_DO", label: "To Do" },
  { id: "IN_PROGRESS", label: "In Progress" },
  { id: "DONE", label: "Done" },
];

export enum TASK_TYPES {
  BUG = "Bug",
  TASK = "Task",
  IDEA = "Idea",
}

export enum TASK_STATE {
  TODO = "To Do",
  IN_PROGRESS = "In Progress",
  DONE = "Done",
}

export enum TASK_PRIORITY {
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
}

export const tasks: TaskType[] = [
  {
    id: "1",
    title: "Piss",
    type: TASK_TYPES.BUG,
    priority: TASK_PRIORITY.HIGH,
    assignee: "MAKS KAks",
    state: TASK_STATE.DONE,
    rank: 10,
  },
  {
    id: "2",
    title: "Poop",
    type: TASK_TYPES.BUG,
    priority: TASK_PRIORITY.MEDIUM,
    assignee: "Don Kon",
    state: TASK_STATE.IN_PROGRESS,
    rank: 20,
  },
  {
    id: "3",
    title: "Gym",
    type: TASK_TYPES.BUG,
    priority: TASK_PRIORITY.MEDIUM,
    assignee: "Man Spider",
    state: TASK_STATE.DONE,
    rank: 30,
  },
  {
    id: "4",
    title: "Sleep",
    type: TASK_TYPES.BUG,
    priority: TASK_PRIORITY.HIGH,
    assignee: "Dec Rice",
    state: TASK_STATE.DONE,
    rank: 40,
  },
];