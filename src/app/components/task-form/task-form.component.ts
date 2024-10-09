import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { TaskFormType } from '../../types/task'

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  @Output() onAddTask = new EventEmitter<TaskFormType>()
  @Input() showTaskForm: boolean = false

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.taskForm.invalid) {
      alert('Preencha todos os campo!')
      return
    }
    this.onAddTask.emit(this.taskForm.value)
    this.taskForm.reset()
  }
}
