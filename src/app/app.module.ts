import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ButtonComponent ]
})
export class AppModule { 
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const custElement = createCustomElement(ButtonComponent, {injector : this.injector});
    customElements.define('app-button', custElement);
  }
}
