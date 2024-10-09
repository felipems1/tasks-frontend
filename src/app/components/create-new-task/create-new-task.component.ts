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
export class CreateNewTaskComponent implements OnInit {
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

  ngOnInit(): void {}
  
  onSubmit() {
    if (this.taskForm.invalid) {
      alert('Preencha todos os campo!')
      return
    }
    this.onAddTask.emit(this.taskForm.value)
    this.taskForm.reset()
  }
}
