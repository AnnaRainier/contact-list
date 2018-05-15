import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientsService {

  constructor(private http: HttpClient) { }


  getClients() {
    return this.http.get('../../assets/clients.json');
    /*
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../../assets/clients.json', false);
    xhr.send();
    if (xhr.status != 200) {
      alert( xhr.status + ': ' + xhr.statusText ); 
    } else {
      return JSON.parse(xhr.responseText);
  }
}
*/
}
}
