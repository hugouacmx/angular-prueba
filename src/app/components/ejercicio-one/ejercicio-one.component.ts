import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ejercicio-one',
  templateUrl: './ejercicio-one.component.html',
  styles: [
  ]
})
export class EjercicioOneComponent {
  public result: any;
  @ViewChild('txtCadena')

  public stringInput!: ElementRef<HTMLInputElement>;

  constructor() {}

  onSave(): void {
    const newTag = this.stringInput.nativeElement.value;
    this.reverseWords(newTag);
  }

  reverseWords(cadenaInput: any) {
    return this.result = cadenaInput.split(' ').map((word:any) => word.split('').reverse().join('')).join(' ');
  }

}
