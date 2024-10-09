import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { TaskFormType } from '../../types/task'
import { TaskFormFieldsComponent } from '../task-form-fields/task-form-fields.component'

@Component({
  selector: 'app-create-new-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TaskFormFieldsComponent],
  templateUrl: './create-new-task.component.html',
})
export class CreateNewTaskComponent {
  @Output() onAddTask = new EventEmitter<TaskFormType>()
  @Input() showTaskForm: boolean = false

  taskForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required]
    });
  }
  
  onSubmit() {
    this.submitted = true;

    if (this.taskForm.invalid) {
      return
    }
    this.onAddTask.emit(this.taskForm.value)
    this.taskForm.reset()
    this.submitted = false;
  }
}
