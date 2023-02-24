import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindApiElementComponent } from './find-api-element/find-api-element.component';
import { FindApiListComponent } from './find-api-list/find-api-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FindApiElementComponent,
    FindApiListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FindApiListComponent
  ]
})
export class FindApiModule { }
