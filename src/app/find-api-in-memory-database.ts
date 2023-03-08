import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";



@Injectable({
    providedIn: "root"
})
export class FindApiInMemoryDatabase implements InMemoryDbService {
    createDb() {
        const servers = [
            {
                name: "Address Api",
                server: 1,
                url: "test test",
                availability: 1
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
        ]

        const domains = [
            {
                name: "DTM",
                apis: ['Address', 'EContact', 'Deceased']
            },
            {
                name: "DEX",
                apis: ['DataExchange', 'Ceidg']
            },
            {
                name: "Finance",
                apis: ['DirectDebit', 'Payments']
            },
            {
                name: "EKruk",
                apis: ['Ekruk', 'abc']
            }
        ]
        return { servers, domains };
    }
}