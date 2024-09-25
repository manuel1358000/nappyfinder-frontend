import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {

}
