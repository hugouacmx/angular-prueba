import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  public menu: MenuItem[] = [
    {title: 'Ejercicio - 01', route: './ejercicioOne'},
    {title: 'Ejercicio - 02', route: './ejercicioTwo'}
  ]

}
