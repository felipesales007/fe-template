import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampanhaNovaComponent } from './campanha/campanha-nova/campanha-nova.component';
import { CampanhaListarComponent } from './campanha/campanha-listar/campanha-listar.component';
import { UsuarioEditarComponent } from './usuario/usuario-editar/usuario-editar.component';
import { UsuarioSenhaComponent } from './usuario/usuario-senha/usuario-senha.component';

const routes: Routes = [
  { path:"", component: DashboardComponent },
  { path:"dashboard", component: DashboardComponent },
  { path:"campanha/nova", component: CampanhaNovaComponent },
  { path:"campanha/listar", component: CampanhaListarComponent },
  { path:"usuario/editar", component: UsuarioEditarComponent },
  { path:"usuario/senha", component: UsuarioSenhaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
