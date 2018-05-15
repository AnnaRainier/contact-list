import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit, OnDestroy {
  @Input() clients: Array<Object>
  @Input() term
  @Output() newClient = new EventEmitter<Object>()
  searchedClients: string[]
  subscription: Subscription

  constructor(private clientsList: ClientsService) { }

  ngOnInit() {
    this.getClientsList();
  }

  getClientsList() {
    this.subscription = this.clientsList.getClients().subscribe((value) => {
      let newVal = Object.assign(value);
      this.clients = newVal;
      this.transformClients();
    });

  }

  clientSelected(client) {
    this.newClient.emit(client);
  }

  hideMainTable(term) {
    this.term = term;
  }

  transformClients() {
    let globalArr = [];
    this.clients.forEach(element => {
      let result = Object.keys(element).map((key) => {
        return element[key]
      });
      //console.log(result);
      let obj = Object.assign({}, ...result);
      //console.log(obj);
      globalArr.push(obj);
      //console.log(globalArr);
      this.searchedClients = globalArr;
    });
    console.log(this.searchedClients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
