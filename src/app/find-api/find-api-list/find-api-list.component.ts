import { Component, OnInit } from '@angular/core';
import { FindApiService } from '../service/find-api.service';
import { ServerModel } from '../state/ServerModel';

@Component({
  selector: 'app-find-api-list',
  templateUrl: './find-api-list.component.html',
  styleUrls: ['./find-api-list.component.css']
})
export class FindApiListComponent implements OnInit {

  servers = [
    {
      name: "Address Api",
      server: 1,
      url: "test test",
      availability: 1,
    },
    {
      name: "Address Api",
      server: 0,
      url: "test 123",
      availability: 1
    },
    {
      name: "EContact Api",
      server: 1,
      url: "mails",
      availability: 1
    },
    {
      name: "EContact Api",
      server: 0,
      url: "e contact",
      availability: 0
    },
    {
      name: "Phones Api",
      server: 1,
      url: "haloooo",
      availability: 1
    },
    {
      name: "Phones Api",
      server: 0,
      url: "dryn dryn",
      availability: 0
    }
  ];

  actualServer = this.servers;

  findByName: string = '';

  constructor(private findApiService: FindApiService) { }
  
  ngOnInit(): void {
    this.findApiService.getServers().subscribe(x => console.log(x));
  }

  filter() : void {
    if(this.findByName === '')
    {
      this.actualServer = this.servers;
    }
    else {
      this.actualServer = this.actualServer.filter(x => x.name === this.findByName);
      this.findByName = '';
    }
  }
}
