import { Component } from '@angular/core';
import { json } from 'express';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nselect
nombres: string[]= ['Lucas','Susana'];
i: number=0 ;
generos: string[]= ['masculino','femenino'];
invitacionMapa= {
  'masculino':'invitarlo',
  'femenino': 'invitarla'
}
cambiar(){
  if (this.i == 0) {this.i=(this.i+1),console.log(this.i)}
  else             {this.i=(this.i-1),console.log(this.i)}
}

//i18nplural
clientes: string[]= ['Maria','Pedro', 'Juan', 'Jose', 'Ines', 'Alberto'];
newArray: string[] = [];


clientesMap= {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos # cliente esperando',
  'other': 'tenemos # clientes esperando'
}

eliminar(){
  this.clientes.splice(this.clientes.length -1 )
  console.log(this.clientes);
}

// Key Value Pipe
persona={
  nombre: 'Lucas',
  edad:35,
  direccion: 'Posadas, Misiones'
}
//Json Pipe
heroes=[
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Batman',
    vuela: false
  }
];
  
//Async Pipe
miObservable = interval(100);


  constructor() { }

  

}
