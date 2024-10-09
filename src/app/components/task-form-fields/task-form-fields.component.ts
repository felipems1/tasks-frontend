import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form-fields',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form-fields.component.html',
})
export class TaskFormFieldsComponent {
  @Input() taskForm!: FormGroup;
  @Input() submitted: boolean = false;
}
