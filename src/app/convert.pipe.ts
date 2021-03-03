import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): unknown {

    switch(targetUnits){
      case 'm' : return (value) ? value * 1000 * 1.60934  : " ";
      case 'km' : return (value) ? value * 1.60934  : " ";
      default : return (value) ? value : " ";
    }
    
  }

}
