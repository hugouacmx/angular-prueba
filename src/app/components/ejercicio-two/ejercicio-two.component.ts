import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ejercicio-two',
  templateUrl: './ejercicio-two.component.html',
  styles: [
  ]
})
export class EjercicioTwoComponent {
  @ViewChild('txtCadena')
  public stringInput!: ElementRef<HTMLInputElement>;

  @ViewChild('txtNumero')
  public numInput!: ElementRef<HTMLInputElement>;


  public result: any;

  countRepeated() {

    const newTag = this.stringInput.nativeElement.value;

    const newNum = this.numInput.nativeElement.value;

    let rearranged = newTag.split(',');

    const arrOfNum = rearranged.map((str:any) => {
      return parseInt(str, 10);
    });

    console.log(arrOfNum);

    this.countDigit(arrOfNum, newNum);
  }

  countDigit(arr: any, digit: any) {
    const digitString = digit.toString();
    const digitSet = new Set(digitString);

    this.result = arr.reduce((total: any, number: any) => {
        const numberString = number.toString();
        const numberSet = new Set(numberString);
        const digitCount = [...numberSet].filter(d => digitSet.has(d)).length;
        return total + digitCount;
    }, 0);

    return this.result;
}

}
