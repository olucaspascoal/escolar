import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./pages/contato/contato.module').then(m => m.ContatoModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./pages/curso/curso.module').then(m => m.CursoModule)
  },
  {
    path: 'noticia',
    loadChildren: () => import('./pages/noticia/noticia.module').then(m => m.NoticiaModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
