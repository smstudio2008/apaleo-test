import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'apaleo-admin-users-filter',
    templateUrl: './user-list-filter.component.html',
    styleUrls: ['./user-list-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListFilterComponent {
    @Output() public searchValue: EventEmitter<string> = new EventEmitter<string>();
    @Output() public sortingValue = new EventEmitter<string>();

    public  onOptionSelected(value: string): void {
        this.sortingValue.emit(value);
    }

    public onSearch(value: string): void {
        this.searchValue.emit(value);
    }
}
