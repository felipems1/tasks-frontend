import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form-fields',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-fields.component.html',
})
export class TaskFormFieldsComponent {
  @Input() taskForm!: FormGroup;
}
