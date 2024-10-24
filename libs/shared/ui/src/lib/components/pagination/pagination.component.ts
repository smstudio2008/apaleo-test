import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'apaleo-ui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [ButtonComponent, NgClass, NgFor]
})
export class PaginationComponent {
  @Input() public totalItems = 0;
  @Input() public pageSize = 10;
  @Input() public currentPage = 0;

  @Output() public pageChange = new EventEmitter<number>();

  public get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  public onPageChange(newPage: number): void {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.pageChange.emit(newPage);
    }
  }
}