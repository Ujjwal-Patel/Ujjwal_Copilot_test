import { TaskPriority, TaskStatus } from './task.enums';

export interface Task {
  id?: string;
  taskName: string;
  taskDescription: string;
  taskExpiryDate: string;
  notes: string;
  priority: TaskPriority;
  status: TaskStatus;
}
