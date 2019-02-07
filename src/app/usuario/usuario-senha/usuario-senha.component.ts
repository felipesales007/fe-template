import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-usuario-senha',
  templateUrl: './usuario-senha.component.html',
  styleUrls: ['./usuario-senha.component.css']
})
export class UsuarioSenhaComponent implements OnInit {
  sexo: any = "Selecione o sexo";
  estado: any = "Selecione o estado";
  
  constructor() { }

  ngOnInit() {
    // validação
    $("#fe-usuario-senha-form").validate();
  }

}
