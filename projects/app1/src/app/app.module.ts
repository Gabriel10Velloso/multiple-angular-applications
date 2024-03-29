import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'projects/components/material.module';

import { ComponentsModule } from '../../../components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

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
    ComponentsModule
  ],
  exports:[ComponentsModule],
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
