import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindApiListComponent } from './find-api-list/find-api-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FindApiContainerComponent } from './find-api-container/find-api-container.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FindApiDomainComponent } from './find-api-domain/find-api-domain.component';

const ROUTES: any = [
  { path: 'domains', component: FindApiDomainComponent },
  { path: "list", component: FindApiListComponent },
  { path: '', redirectTo: 'domains', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]


@NgModule({
  declarations: [
    FindApiListComponent,
    FindApiContainerComponent,
    FindApiDomainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    FindApiContainerComponent
  ]
})
export class FindApiModule { }
