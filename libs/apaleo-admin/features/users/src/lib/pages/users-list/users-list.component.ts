import { Component, inject, OnInit } from '@angular/core';
import { IUser, UsersFacade } from '@apaleo-admin/domain';

import { Observable } from 'rxjs';

@Component({
    selector: 'apaleo-admin-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
    private readonly _usersFacade: UsersFacade = inject(UsersFacade);

    public userDataInfo$: Observable<IUser[] | null | undefined> | undefined;
    public searchTerm = '';
    public sortType = '';

    public ngOnInit(): void {
        this._usersFacade.loadUser();

        this.userDataInfo$ = this._usersFacade.loaded$;
    }

    public handlePageChange(page: number) {
        // TODO //
        // Fetch paginated data based on `page`
    }

    public assignValue(data: string): void {
        this.searchTerm = data;
    }

    public sortingValue(dataSort: string): void {
        this.sortType = dataSort;
    }
}
