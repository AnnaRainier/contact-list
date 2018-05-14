import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {

  constructor() { }


  getClients() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../../assets/clients.json', false);
    xhr.send();
    if (xhr.status != 200) {
      alert( xhr.status + ': ' + xhr.statusText ); 
    } else {
      return JSON.parse(xhr.responseText);
  }
}
}
