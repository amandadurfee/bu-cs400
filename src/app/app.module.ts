import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ResultsComponent } from './validated-form/results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidatedFormComponent } from './validated-form/validated-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    ValidatedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
