import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SecretsService } from './secrets.service';

import { AppComponent } from './app.component';


@NgModule({
//Metadata Portion
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SecretsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
