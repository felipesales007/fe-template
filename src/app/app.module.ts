import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './template/barra/barra.component';
import { CorpoComponent } from './template/corpo/corpo.component';
import { MenuComponent } from './template/menu/menu.component';
import { RodapeComponent } from './template/rodape/rodape.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampanhaNovaComponent } from './campanha/campanha-nova/campanha-nova.component';
import { CampanhaListarComponent } from './campanha/campanha-listar/campanha-listar.component';
import { UsuarioEditarComponent } from './usuario/usuario-editar/usuario-editar.component';
import { UsuarioSenhaComponent } from './usuario/usuario-senha/usuario-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    CorpoComponent,
    MenuComponent,
    RodapeComponent,
    DashboardComponent,
    CampanhaNovaComponent,
    CampanhaListarComponent,
    UsuarioEditarComponent,
    UsuarioSenhaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
