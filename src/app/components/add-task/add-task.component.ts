import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NewTaskType } from '../../types/task'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<NewTaskType>()
  @Input() showNewTaskForm: boolean = false

  task: string = ''
  description: string = ''
  deadline: string = ''
  
  onSubmit() {
    if (!this.task || !this.description || !this.deadline) {
      alert('Preencha todas informação!')
      return
    }

    const newTask = {
      title: this.task,
      description: this.description,
      deadline: this.deadline,
    }

    this.onAddTask.emit(newTask)

    this.task = ''
    this.description = ''
    this.deadline = ''
  }

}
