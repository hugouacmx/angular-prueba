import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjercicioOneComponent } from './components/ejercicio-one/ejercicio-one.component';
import { EjercicioTwoComponent } from './components/ejercicio-two/ejercicio-two.component';
import { SideMenuComponent } from './components/shared/side-menu/side-menu.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioOneComponent,
    EjercicioTwoComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
