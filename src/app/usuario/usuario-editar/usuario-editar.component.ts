import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // validação
    $("#fe-usuario-editar-form").validate();

    // para os selects personalizados
    if ($(".selectpicker").length != 0) {
      $(".selectpicker").selectpicker();
    }
  }

}
