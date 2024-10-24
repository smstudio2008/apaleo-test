import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'apaleo-ui-dropdown',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() public options: string[] = [];
  @Input() public selectedOption = '';

  @Output() public optionChange: EventEmitter<string> = new EventEmitter<string>();

  public onSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
  
    this.optionChange.emit(target.value);
  }
}