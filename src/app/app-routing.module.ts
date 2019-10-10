import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { Tab4Component } from './tab4/tab4.component';
import { Tab5Component } from './tab5/tab5.component';

import { Tab1childComponent } from './tab1/tab1child/tab1child.component';
import {RouterGuardGuard} from './router-guard.guard';


export const routes: Routes = [
  {path:'tab1', component:Tab1Component, children:[{path:'tab1Child', component:Tab1childComponent}]},
  {path:'tab2', component:Tab2Component},
  {path:'tab3', component:Tab3Component, canActivate:[RouterGuardGuard]},
  {path:'tab4', component:Tab4Component, canDeactivate:[RouterGuardGuard]},
  {path:'tab5', component:Tab5Component},
]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
