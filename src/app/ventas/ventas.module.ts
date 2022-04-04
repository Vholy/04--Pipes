import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { PrimeNgModule } from '../primeNg/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports: [
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent,
    MayusculasPipe,
    VuelaPipe

  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
