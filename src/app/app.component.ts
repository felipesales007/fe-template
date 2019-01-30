import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'template';

  constructor() { }

  ngOnInit() {
    // para quando a tela esta em carregamento
    var i = setInterval(function () {
      clearInterval(i);
      $(".fe-carregando").fadeOut("slow");
      $(".fe-carregado").fadeIn("slow");
    });
  }

}
