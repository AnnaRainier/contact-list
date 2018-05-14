import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  @Input() clients: Array<Object>
  @Output() newClient = new EventEmitter<Object>()

  constructor(private clientsList: ClientsService) { }

  ngOnInit() {
    this.clients = this.clientsList.getClients();
  }

  clientSelected(client) {
    console.log(client);
    this.newClient.emit(client);
  }

}
