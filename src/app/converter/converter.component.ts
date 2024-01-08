import { Component } from '@angular/core';
import { NumberToWordsPipe } from '../number-to-words.pipe'; 

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  inputNumber!: number;
  outputText!: string;

  constructor(private numberToWords: NumberToWordsPipe) {}

  convert() {
    console.log("convert");
    if (!this.isRange() && !this.isValidNumber()) {
      return;
    }

    
    this.outputText = this.numberToWords.transform(this.inputNumber);
  }

  isRange(): boolean {
    if (this.inputNumber > 1000000) {
      console.log("Invalid range detected");
      this.outputText = 'Please enter a value less than or equal to 10 lakhs.';
      return false;
    }

    return true;
  }

  isValidNumber(): boolean {
    if (isNaN(this.inputNumber) || this.inputNumber === null) {
      console.log("Invalid number detected");
      this.outputText = 'Please enter a valid number';
      return false;
    }

    return true;
  }
}
