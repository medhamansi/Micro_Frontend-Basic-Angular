import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents : [FlightComponent],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {
   
  }
  ngDoBootstrap(){
    const el = createCustomElement(FlightComponent, { injector: this.injector });
    customElements.define('app-flight', el);
  }
}
