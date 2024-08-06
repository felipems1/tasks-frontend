import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-task',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './search-task.component.html',
})
export class SearchTaskComponent {
  @Output() onSearchTask = new EventEmitter<string>()

  faSearch = faSearch

  task: string = ''

  onSubmit() {
    this.onSearchTask.emit(this.task)

    this.task = ''
  }
}
