import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMapComponent } from './pages/dashboard-map/dashboard-map.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: ()=>DashboardMapComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapViewRoutingModule { }
