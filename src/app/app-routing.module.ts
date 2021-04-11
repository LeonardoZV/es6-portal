import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { AdministracaoComponent } from './administracao/administracao.component';

import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'relatorio',
    pathMatch: 'full'
  },
  { 
    path: 'relatorio',
    component: RelatorioComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  { 
    path: 'administracao',
    component: AdministracaoComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  { 
    path: '**', 
    component: PaginaNaoEncontradaComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
