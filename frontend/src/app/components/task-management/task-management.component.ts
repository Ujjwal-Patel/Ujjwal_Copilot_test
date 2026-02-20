import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './services/task.service';
import { TaskPriority, TaskStatus } from './models/task.enums';
import { Task } from './models/task.interface';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {
  taskForm: FormGroup;
  tasks: Task[] = [];
  isEditMode = false;
  editingTaskId: string | null = null;

  // Enums for dropdowns
  priorities = Object.values(TaskPriority);
  statuses = Object.values(TaskStatus);
  TaskStatus = TaskStatus;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.maxLength(20)]],
      taskDescription: ['', [Validators.required, Validators.maxLength(50)]],
      taskExpiryDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      notes: ['', Validators.maxLength(500)]
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = this.sortTasks(data);
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
      }
    });
  }

  sortTasks(tasks: Task[]): Task[] {
    const today = new Date();
    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(today.getDate() + 7);

    return tasks.sort((a, b) => {
      const aExpiryDate = new Date(a.taskExpiryDate);
      const bExpiryDate = new Date(b.taskExpiryDate);
      
      const aIsUrgent = aExpiryDate <= sevenDaysFromNow && a.priority === TaskPriority.HIGH;
      const bIsUrgent = bExpiryDate <= sevenDaysFromNow && b.priority === TaskPriority.HIGH;
      
      // Urgent tasks (expiring within 7 days and high priority) come first
      if (aIsUrgent && !bIsUrgent) return -1;
      if (!aIsUrgent && bIsUrgent) return 1;
      
      // If both urgent or both not urgent, sort by priority
      const priorityOrder = { [TaskPriority.HIGH]: 1, [TaskPriority.MEDIUM]: 2, [TaskPriority.LOW]: 3 };
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;
      
      // If same priority, sort by expiry date (earliest first)
      return aExpiryDate.getTime() - bExpiryDate.getTime();
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const taskData: Task = this.taskForm.value;

      if (this.isEditMode && this.editingTaskId) {
        this.taskService.updateTask(this.editingTaskId, taskData).subscribe({
          next: () => {
            this.loadTasks();
            this.resetForm();
          },
          error: (error) => {
            console.error('Error updating task:', error);
          }
        });
      } else {
        this.taskService.createTask(taskData).subscribe({
          next: () => {
            this.loadTasks();
            this.resetForm();
          },
          error: (error) => {
            console.error('Error creating task:', error);
          }
        });
      }
    }
  }

  editTask(task: Task): void {
    this.isEditMode = true;
    this.editingTaskId = task.id || null;
    this.taskForm.patchValue({
      taskName: task.taskName,
      taskDescription: task.taskDescription,
      taskExpiryDate: task.taskExpiryDate,
      priority: task.priority,
      status: task.status,
      notes: task.notes
    });
  }

  deleteTask(id: string): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          this.loadTasks();
        },
        error: (error) => {
          console.error('Error deleting task:', error);
        }
      });
    }
  }

  resetForm(): void {
    this.taskForm.reset();
    this.isEditMode = false;
    this.editingTaskId = null;
  }
}
