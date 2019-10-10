import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { Tab4Component } from './tab4/tab4.component';
import { Tab5Component } from './tab5/tab5.component';
import { Tab1childComponent } from './tab1/tab1child/tab1child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, FilterPipe, Tab1Component, Tab2Component, Tab3Component, Tab4Component, Tab5Component, Tab1childComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
