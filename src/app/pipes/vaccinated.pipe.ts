import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vaccinated'
})
export class VaccinatedPipe implements PipeTransform {

  transform(firstNumber: number, secondNumber: number): unknown {
    return firstNumber && secondNumber ? ((secondNumber / firstNumber) * 100).toFixed(1) + '%' : '';
  }

}
