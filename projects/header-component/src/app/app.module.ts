import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { HeaderComponent } from './header.component';
import { createCustomElement } from '@angular/elements';
import { HeaderModule } from './header.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, HeaderModule],
  providers: []
  // no need because we don't want to actually bootstrap an app but to just define a web component
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(HeaderComponent, { injector: this.injector });
    customElements.define('ce-header', myCustomElement);
    console.debug('My custom component defined');
  }
}
