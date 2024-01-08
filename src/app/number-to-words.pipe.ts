import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  transform(number: number): string {
    
    // Special case: If the number is 0, return 'Zero'
    if (number === 0) {
      return 'Zero';
    }
  
    // Define arrays for units, teens, and tens to be used in the conversion
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
    // Initialize the result string
    let result = '';
  
    // Function to convert a number less than 1000 to words
    const convertLessThanThousand = (num: number): string => {
      let tempResult = '';
  
      // If the number is greater than or equal to 100, convert hundreds place
      if (num >= 100) {
        tempResult += units[Math.floor(num / 100)] + ' Hundred ';
        num %= 100;
      }
  
      // If the number is between 11 and 19, convert teens place
      if (num >= 11 && num <= 19) {
        tempResult += teens[num - 10] + ' ';
      } else if (num >= 20 || num === 10) {
        // If the number is 10 or greater than 20, convert tens place
        tempResult += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
      }
  
      // If the number is between 1 and 9, convert units place
      if (num > 0 && num < 10) {
        tempResult += units[num] + ' ';
      }
  
      return tempResult;
    };
  
    // Convert Lakhs place if the number is 100000 or greater
    if (number >= 100000) {
      result += convertLessThanThousand(Math.floor(number / 100000)) + 'Lakh ';
      number %= 100000;
    }
  
    // Convert Thousands place if the number is 1000 or greater
    if (number >= 1000) {
      result += convertLessThanThousand(Math.floor(number / 1000)) + 'Thousand ';
      number %= 1000;
    }
  
    // Convert the remaining part (less than 1000)
    result += convertLessThanThousand(number);
  
    // Trim any extra spaces and return the result
    return result.trim();
  }
  
}
