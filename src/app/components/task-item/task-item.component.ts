import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TaskType } from '../../types/task'
import { faTimes, faCheck, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '../button/button.component'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { TaskFormFieldsComponent } from '../task-form-fields/task-form-fields.component'

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ButtonComponent, FormsModule, ReactiveFormsModule, TaskFormFieldsComponent],
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: TaskType
  @Output() onDeleteTask = new EventEmitter<TaskType>()
  @Output() onConcludeTask = new EventEmitter<TaskType>()
  @Output() onUpdateTask = new EventEmitter<TaskType>()

  showUpdateTaskForm: boolean = false
  taskForm!: FormGroup

  faTimes = faTimes
  faPencil = faPencil
  faCheck = faCheck

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: [this.task.title, Validators.required],
      description: [this.task.description, Validators.required],
      deadline: [this.task.deadline, Validators.required]
    })
  }

  toggleTaskForm(value: boolean) {
    this.showUpdateTaskForm = value
  }

  onDelete(task: TaskType) {
    this.onDeleteTask.emit(task)
  }

  onConclude(task: TaskType){
    this.onConcludeTask.emit(task)
  }

  
  onSubmit() {
    if (this.taskForm.invalid) {
      alert('Preencha todos os campo!')
      return
    }

    const updatedTask = {
      id: this.task.id,
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      status: this.task.status,
      deadline: this.taskForm.value.deadline,
    }

    this.onUpdateTask.emit(updatedTask)

    this.taskForm.reset()
    this.showUpdateTaskForm = false
  }
}
