import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonComponent, CardComponent, DropdownComponent, InputComponent, PaginationComponent } from '@apaleo/ui';

import { UsersHomeComponent } from './pages/users-home/users-home.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

import { UserListDetailComponent } from './components/user-list-detail/user-list-detail.component';
import { ApaleoAdminDomainModule } from '@apaleo-admin/domain';

import { UserListFilterComponent } from './components/user-list-filter/user-list-filter.component';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { SortingPipe } from './pipes/sorting.pipe';

const components = [
    UsersHomeComponent,
    UsersListComponent,
    UserListDetailComponent,
    UserListFilterComponent,
    FilterSearchPipe,
    SortingPipe,
];

export const routes: Array<Route> = [
    {
        path: '',
        component: UsersHomeComponent,
        children: [
            { path: 'users', component: UsersListComponent },
            { path: '**', redirectTo: '' },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        ApaleoAdminDomainModule,
        RouterModule.forChild(routes),
        ButtonComponent,
        CardComponent,
        InputComponent,
        DropdownComponent,
        PaginationComponent,
    ],
    declarations: [...components],
    exports: [...components],
})
export class UserFeaturesApaleoAdminModule {}
