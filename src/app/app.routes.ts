import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
            }
        ]
    },
    {
        path:'',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: ()=> import('./map-view/map-view.module').then(m=>m.MapViewModule)
            }
        ]
    },
    {
        path:'',
        component: PrivateLayoutComponent,
        children: [
            {
                path: 'locations',
                loadChildren: ()=> import('./locations/locations.module').then(m=>m.LocationsModule)
            },
            {
                path: 'users',
                loadChildren: ()=> import('./users/users.module').then(m=>m.UsersModule)
            }
        ]
    }

];
