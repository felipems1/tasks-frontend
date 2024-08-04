import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TaskType } from '../../types/task'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: TaskType
  @Output() onDeleteTask = new EventEmitter<TaskType>()

  faTimes = faTimes

  onDelete(task: TaskType) {
    this.onDeleteTask.emit(task)
  }
}
