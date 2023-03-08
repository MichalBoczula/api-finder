import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FindApiService } from '../service/find-api.service';
import { DomainModel } from '../state/DomainModel';

@Component({
  selector: 'app-find-api-domain',
  templateUrl: './find-api-domain.component.html',
  styleUrls: ['./find-api-domain.component.css']
})
export class FindApiDomainComponent implements OnInit {

  private initialDomains!: Observable<DomainModel[]>;

  actualDomains$ = this.findApiService.domains$;

  findByName: string = '';

  constructor(private findApiService: FindApiService) { }

  ngOnInit(): void {
    this.initialDomains = this.actualDomains$;
  }

  filter(): void {
    if (this.findByName === '') {
      this.actualDomains$ = this.initialDomains
    }
    else {
      let localDomains: DomainModel[] = []
      this.actualDomains$.subscribe(x => localDomains = x);

      this.actualDomains$ = of( localDomains.map(x => {
        let apis = x.apis.filter(y => y.toLocaleLowerCase().includes(this.findByName));

          let name = x.name;
          return { name, apis }
      }).filter( x=> x.apis.length > 0));

      this.findByName = '';
    }
  }
}
