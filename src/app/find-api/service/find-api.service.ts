import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ServerModel } from '../state/ServerModel';
import { ProductCategory } from '../state/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class FindApiService {

  private url = "http://localhost:4201/api/servers";
  suppliersUrl = 'http://localhost:4201/api/productCategories';

  constructor( private httpClient: HttpClient) { }

  getServers(): Observable<ServerModel[]> {
    return this.httpClient.get<any>(this.url)
    .pipe(
      tap(x => console.log(x)),
      catchError(x => throwError(x))
    )
  }

  suppliers$ = this.httpClient.get<ProductCategory[]>(this.suppliersUrl)
  .pipe(
    tap(data => console.log('suppliers', JSON.stringify(data))),
  );
}
