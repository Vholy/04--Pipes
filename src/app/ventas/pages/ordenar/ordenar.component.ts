import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

mayusculas : boolean =true;
orden :string= "";
heroes : Heroe[] = [
  {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Robin',
    vuela: false,
    color: Color.verde
  },
  {
    nombre: 'RedHood',
    vuela: false,
    color: Color.rojo
  }
]

cambiar(){
  return this.mayusculas=!this.mayusculas
  console.log(this.mayusculas);
  }
  
cambiarOrden(parametro:string){
  this.orden= parametro
  
}



}
