import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskFormType, TaskType } from '../../types/task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ButtonComponent } from '../button/button.component';
import { SearchTaskComponent } from '../search-task/search-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNewTaskComponent } from '../create-new-task/create-new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, CreateNewTaskComponent, ButtonComponent, SearchTaskComponent, ReactiveFormsModule],
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {

  tasks: TaskType[] = []

  constructor(private taskService: TaskService) { }

  showTaskForm: boolean = false

  toggleTaskForm(value: boolean) {
    this.showTaskForm = value
  }

  ngOnInit(): void {
    this.loadTasks()
  }

  loadTasks(title?: string): void {
    this.taskService.getTasks(title).subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask(task: TaskFormType) {
    this.taskService.addTask(task).subscribe(() => {
      this.loadTasks()
    })
  }

  deleteTask(task: TaskType) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.loadTasks()
    });
  }

  onUpdate(task: TaskType) {
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks()
    })
  }

  onConclude(task: TaskType) {
    task.status = 'COMPLETED'
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks()
    })
  }
}
