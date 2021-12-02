import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { ChildPersonComponent } from './child-person/child-person.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonsComponent,
    ChildPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
