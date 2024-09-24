import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-dashboard-map',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-map.component.html',
  styleUrl: './dashboard-map.component.scss'
})
export class DashboardMapComponent {

  title:string =environment.apiUrl ;

}
