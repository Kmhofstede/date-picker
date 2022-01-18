import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ContactNamePipe } from './pipes/contact-name.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ContactNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
