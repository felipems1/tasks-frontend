import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core'
import { TaskType } from '../../types/task'
import { faTimes, faCheck, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '../button/button.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ButtonComponent, FormsModule],
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: TaskType
  @Output() onDeleteTask = new EventEmitter<TaskType>()
  @Output() onConcludeTask = new EventEmitter<TaskType>()
  @Output() onUpdateTask = new EventEmitter<TaskType>()

  showUpdateTaskForm: boolean = false

  toggleTaskForm(value: boolean) {
    this.showUpdateTaskForm = value
  }

  faTimes = faTimes
  faPencil = faPencil
  faCheck = faCheck

  onDelete(task: TaskType) {
    this.onDeleteTask.emit(task)
  }

  onConclude(task: TaskType){
    this.onConcludeTask.emit(task)
  }

  taskTitle: string = ''
  description: string = ''
  deadline: string = ''

  ngOnInit(): void {
    this.taskTitle = this.task.title
    this.description = this.task.description
    this.deadline = this.task.deadline
  }
  
  onSubmit() {
    if (!this.taskTitle || !this.description || !this.deadline) {
      alert('Preencha todas informação!')
      return
    }

    const updateTask = {
      id: this.task.id,
      title: this.taskTitle,
      description: this.description,
      status: this.task.status,
      deadline: this.deadline,
    }

    this.onUpdateTask.emit(updateTask)

    this.taskTitle = ''
    this.description = ''
    this.deadline = ''
    this.showUpdateTaskForm = false
  }
}
