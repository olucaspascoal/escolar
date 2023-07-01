import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaComponent } from './noticia.component';


@NgModule({
  declarations: [
    NoticiaComponent
  ],
  imports: [
    CommonModule,
    NoticiaRoutingModule
  ]
})
export class NoticiaModule { }
