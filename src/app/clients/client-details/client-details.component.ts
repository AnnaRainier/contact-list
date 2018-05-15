import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  @Input() client: Object

  constructor() { }

  ngOnInit() {
  }

  clearCurrentClient(client) {
    this.client = undefined;
  }

}
