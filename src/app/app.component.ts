import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from './primeNg/prime-ng.module';
import{PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PipesApp';


  constructor(private PrimeNgConfig: PrimeNGConfig){}


  ngOnInit(): void {
    this.PrimeNgConfig.ripple=true;
  }
}
