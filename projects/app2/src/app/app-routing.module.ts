import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'projects/app2/src/app/app.component';
import { View1Component } from 'projects/app2/src/app/view1/view1.component';
import { View2Component } from 'projects/app2/src/app/view2/view2.component';


const routes: Routes = [
  {path: 'app2/home', component: AppComponent},
  {path: 'app2/one', component: View1Component},
  {path: 'app2/two', component: View2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
