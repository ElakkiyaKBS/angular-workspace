import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: string, arg2:number): any {
    if(args == 'All'){
      return value.filter(x => x.year);
    }
    else{
 return value.filter(x => x[args] == arg2);
    }
   
  }
}


