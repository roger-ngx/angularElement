import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWebComponentComponent } from './hello-web-component/hello-web-component.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HelloWebComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ HelloWebComponentComponent ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(HelloWebComponentComponent, {injector: this.injector});
    customElements.define('hello-web-component', el);
  }
}
