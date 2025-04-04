export type TaskStatus = "active" | "completed";
export type TaskStatusFilter = "all" | TaskStatus;

export interface IList {
  id: string;
  text: string;
  status: TaskStatus;
}
