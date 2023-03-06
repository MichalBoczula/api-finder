import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { FindApiService } from '../service/find-api.service';
import { ServerModel } from '../state/ServerModel';

@Component({
  selector: 'app-find-api-list',
  templateUrl: './find-api-list.component.html',
  styleUrls: ['./find-api-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindApiListComponent implements OnInit, OnDestroy {

  private serversSubscribe$!: Subscription;

  private initialServers!: ServerModel[];

  actualServers!: ServerModel[];

  findByName: string = '';

  constructor(private findApiService: FindApiService) { }

  ngOnInit(): void {
    this.serversSubscribe$ = this.findApiService.servers$.subscribe(x => {
      this.initialServers = x;
      this.actualServers = x;
    });
  }

  ngOnDestroy(): void {
    this.serversSubscribe$.unsubscribe();
  }

  filter(): void {
    if (this.findByName === '') {
      this.actualServers = this.initialServers
    }
    else {
      this.actualServers = this.actualServers.filter(x => x.name.toLowerCase().includes(this.findByName));
      this.findByName = '';
    }
  }
}
