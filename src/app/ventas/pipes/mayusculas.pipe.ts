import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name:'mayus'
})
export class MayusculasPipe implements PipeTransform{
    transform(value: string, enMayusculas: boolean) :string {

        /*         if(enMayusculas===true ){
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        } */
        return (enMayusculas)
            ? value.toUpperCase() 
            : value.toLowerCase()
    }

}