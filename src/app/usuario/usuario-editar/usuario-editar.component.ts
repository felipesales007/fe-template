import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  sexo: any = "Selecione o sexo";
  estado: any = "Selecione o estado";
  
  constructor() { }

  ngOnInit() {
    // validação
    $("#fe-usuario-editar-form").validate();
  }

  validarSelects(sexo: any, estado: any) {
    // validação em select
    if (sexo == "Selecione o sexo") {
      $("#usuario-sexo").addClass("error");
    } else {
      $("#usuario-sexo").removeClass("error");
    }
    if (estado == "Selecione o estado") {
      $("#usuario-estado").addClass("error");
    } else {
      $("#usuario-estado").removeClass("error");
    }
  }

}
