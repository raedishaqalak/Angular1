import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';


@NgModule({

  imports:      [ BrowserModule,NavbarComponent,SidebarComponent ],
  providers: [],
  bootstrap: [AppModule]
})
export class AppModule { }
