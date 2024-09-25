import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment'; // Asegúrate de que la ruta sea correcta
import { MaterialModule } from '../../../material.module';
import { AppNewCustomersComponent } from '../../../components/new-customers/new-customers.component';
import { AppDailyActivitiesComponent } from '../../../components/daily-activities/daily-activities.component';
import { AppBlogCardsComponent } from '../../../components/blog-card/blog-card.component';
import { AppRevenueProductComponent } from '../../../components/revenue-product/revenue-product.component';

@Component({
  selector: 'app-dashboard-map',
  standalone: true,
  imports: [
    MaterialModule,
    AppNewCustomersComponent,
    AppDailyActivitiesComponent,
    AppBlogCardsComponent,
    AppRevenueProductComponent,
  ],
  templateUrl: './dashboard-map.component.html',
  styleUrl: './dashboard-map.component.scss'
})
export class DashboardMapComponent {

  title:string =environment.apiUrl ;

}
