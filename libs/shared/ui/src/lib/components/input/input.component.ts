import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'apaleo-ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class InputComponent {
  @Input() public placeholder = 'Enter text';
  @Input() public value = '';
  @Input() public disabled = false;

  @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();

  public onValueChange(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.valueChange.emit(target.value);
  }
}
