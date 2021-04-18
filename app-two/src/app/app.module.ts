import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainComponent } from './train/train.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents : [TrainComponent],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {
   
  }
  ngDoBootstrap(){
    const el = createCustomElement(TrainComponent, { injector: this.injector });
    customElements.define('app-train', el);
  }
}
