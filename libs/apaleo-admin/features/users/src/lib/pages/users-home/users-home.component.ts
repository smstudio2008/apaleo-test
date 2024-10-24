import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'apaleo-admin-users-home',
    templateUrl: './users-home.component.html',
    styleUrls: ['./users-home.component.scss'],
})
export class UsersHomeComponent {
    private readonly _router: Router = inject(Router);

    public openUserListPage(): void {
        this._router.navigate(['users']);
    }
}
