import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-web-component',
  templateUrl: './hello-web-component.component.html',
  styleUrls: ['./hello-web-component.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HelloWebComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
