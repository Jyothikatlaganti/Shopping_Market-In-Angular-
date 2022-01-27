import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filter:string,propertyname:string):any[] {
   const result:any =[];
   if(!value || filter ==="" || propertyname===""){
     return value;
   }
   value.forEach((a:any)=>{
     if(a[propertyname].trim().toLowerCase().includes(filter.toLowerCase())){
       result.push(a)
     }
   });
   return result;
  }

}
