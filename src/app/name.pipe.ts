import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any): unknown {
    if(value.gender=="Male"){
      return "Mr:" +value.nam;
    }else
    return "Ms:" +value.nam;
  }

}
