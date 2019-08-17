import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoutingComponents } from './app-routing.module';
import { FormDetailsComponent } from './form-details/form-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponents,
    FormComponent,
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
