import { provideMockStore } from '@ngrx/store/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersListComponent } from './users-list.component';
import { UsersFacade } from '@apaleo-admin/domain';
import { UserListFilterComponent } from '../../components/user-list-filter/user-list-filter.component';
import { UserListDetailComponent } from '../../components/user-list-detail/user-list-detail.component';
import { DropdownComponent, InputComponent, PaginationComponent } from '@apaleo/ui';
import { FilterSearchPipe } from '../../pipes/filter-search.pipe';
import { SortingPipe } from '../../pipes/sorting.pipe';

describe('UsersListComponent', () => {
    let component: UsersListComponent;
    let fixture: ComponentFixture<UsersListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsersListComponent, UserListFilterComponent, UserListDetailComponent, FilterSearchPipe, SortingPipe],
            imports: [PaginationComponent, InputComponent, DropdownComponent],
            providers: [UsersFacade, provideMockStore({})],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
