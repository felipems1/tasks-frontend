import { Component } from '@angular/core';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './app.component.html',
})
export class AppComponent { }
