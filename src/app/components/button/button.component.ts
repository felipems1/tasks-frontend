import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {

  @Input() text: string = ''
  @Input() color: string = ''
  @Output() btnClick = new EventEmitter()

  onClick() {
    this.btnClick.emit()
  }

}
