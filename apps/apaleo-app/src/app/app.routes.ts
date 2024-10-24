import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
    path: '',
    loadChildren: () => import('@apaleo-admin/users').then((module) => module.UserFeaturesApaleoAdminModule),
},];
