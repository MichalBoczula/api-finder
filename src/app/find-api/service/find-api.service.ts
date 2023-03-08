import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, shareReplay, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindApiService {

  private servers = "api/servers";

  private domains = "api/domains";

  constructor(private httpClient: HttpClient) { }

  servers$ = this.httpClient.get<any>(this.servers)
    .pipe(
      tap(x => console.log(JSON.stringify(x))),
      catchError(x => throwError(x)),
      shareReplay(1)
    );

  domains$ = this.httpClient.get<any>(this.domains)
    .pipe(
      tap(x => console.log(JSON.stringify(x))),
      catchError(x => throwError(x)),
      shareReplay(1)
    )
}