import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'apaleo-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, NgFor, ButtonComponent, NgOptimizedImage],
})
export class CardComponent {
  @Input() public title = '';
  @Input() public content = '';
  @Input() public imageUrl?: string;
  @Input() public actions?: string[];

  @Output() public actionClick: EventEmitter<string> = new EventEmitter<string>();

  public onActionClick(action: string): void {
    this.actionClick.emit(action);
  }
}