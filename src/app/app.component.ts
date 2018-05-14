import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  client: Object


  defineClient(client) {
    this.client = client;
    console.log(this.client);
  }
}
