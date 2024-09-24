import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsListComponent } from './pages/locations-list/locations-list.component';
import { LocationsDetailComponent } from './pages/locations-detail/locations-detail.component';

const routes: Routes = [
  {
    path: 'locations-list',
    loadComponent: ()=>LocationsListComponent
  },
  {
    path: 'locations-details/:id',
    loadComponent: ()=> LocationsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
