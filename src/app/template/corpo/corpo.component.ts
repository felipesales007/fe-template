import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // para o scroll personalizado
    var isWindows: boolean;

    (function () {
      isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

      if (isWindows) {
        $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

        $('html').addClass('perfect-scrollbar-on');
      } else {
        $('html').addClass('perfect-scrollbar-off');
      }
    })();
  }

}
