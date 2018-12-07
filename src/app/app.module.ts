import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BootDemoComponent} from './learn-bootstrap-demo/components/boot-demo/boot-demo.component';
import {BootDemoNavComponent} from './learn-bootstrap-demo/components/boot-demo-nav/boot-demo-nav.component';
import {BootCssFlexboxComponent} from './learn-bootstrap-demo/components/boot-css-flexbox/boot-css-flexbox.component';

@NgModule({
  declarations: [
    AppComponent,

    BootDemoComponent,
    BootDemoNavComponent,
    BootCssFlexboxComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
