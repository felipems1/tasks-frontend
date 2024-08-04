import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskType } from '../../types/task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {

  tasks: TaskType[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks()
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  deleteTask(task: TaskType) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.loadTasks()
    });
  }
}
