import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioOneComponent } from './components/ejercicio-one/ejercicio-one.component';
import { EjercicioTwoComponent } from './components/ejercicio-two/ejercicio-two.component';

const routes: Routes = [
  {path: 'ejercicioOne', component: EjercicioOneComponent},
  {path: 'ejercicioTwo', component: EjercicioTwoComponent},
  {path: '**', redirectTo: 'ejercicioOne'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
