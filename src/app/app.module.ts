import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { FindApiInMemoryDatabase } from './find-api-in-memory-database';

import { FindApiModule } from './find-api/find-api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FindApiModule,
    HttpClientInMemoryWebApiModule.forRoot(FindApiInMemoryDatabase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
