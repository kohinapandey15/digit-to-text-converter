import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  transform(number: number): string {
    
   
    if (number === 0) {
      return 'Zero';
    }
  
   
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
    
    let result = '';
  
    
    const convertLessThanThousand = (num: number): string => {
      let tempResult = '';
  
    
      if (num >= 100) {
        tempResult += units[Math.floor(num / 100)] + ' Hundred ';
        num %= 100;
      }
  
     
      if (num >= 11 && num <= 19) {
        tempResult += teens[num - 10] + ' ';
      } else if (num >= 20 || num === 10) {
        
        tempResult += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
      }
  
      
      if (num > 0 && num < 10) {
        tempResult += units[num] + ' ';
      }
  
      return tempResult;
    };
  
  
    if (number >= 100000) {
      result += convertLessThanThousand(Math.floor(number / 100000)) + 'Lakh ';
      number %= 100000;
    }
  
    
    if (number >= 1000) {
      result += convertLessThanThousand(Math.floor(number / 1000)) + 'Thousand ';
      number %= 1000;
    }
  
   
    result += convertLessThanThousand(number);
  
   
    return result.trim();
  }
  
}
