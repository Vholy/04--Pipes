import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NumerosComponent } from './pages/numeros/numeros.component';



@NgModule({
  declarations: [
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent
  ],
  exports: [
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
