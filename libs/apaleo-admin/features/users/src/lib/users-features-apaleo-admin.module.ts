import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonComponent, CardComponent } from '@apaleo/ui';

import { UsersHomeComponent } from './pages/users-home/users-home.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

import { UserListDetailComponent } from './components/user-list-detail/user-list-detail.component';

const components = [UsersHomeComponent, UsersListComponent, UserListDetailComponent];

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
    imports: [CommonModule, RouterModule.forChild(routes), ButtonComponent, CardComponent],
    declarations: [...components],
    //    providers: [RouterFacade, SmartSearchFacade],
    exports: [...components],
})
export class UserFeaturesApaleoAdminModule {}
