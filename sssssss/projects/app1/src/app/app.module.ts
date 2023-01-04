import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { NavComponent } from './nav/nav.component';
import { View2Component } from './view2/view2.component';
import { MaterialModule } from 'src/components/material.module';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    NavComponent,
    View2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
