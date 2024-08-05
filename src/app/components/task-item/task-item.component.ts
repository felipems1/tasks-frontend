import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TaskType } from '../../types/task'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: TaskType
  @Output() onDeleteTask = new EventEmitter<TaskType>()
  @Output() onConcludeTask = new EventEmitter<TaskType>()

  faTimes = faTimes

  faCheck = faCheck

  onDelete(task: TaskType) {
    this.onDeleteTask.emit(task)
  }

  onConclude(task: TaskType){
    this.onConcludeTask.emit(task)
  }
}
