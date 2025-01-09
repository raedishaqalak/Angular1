import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [  NavbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMaster';
  subtitle = "Business Intelligence Dashboard";
}
