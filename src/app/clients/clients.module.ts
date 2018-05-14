import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientsService } from './clients.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientListComponent, ClientDetailsComponent, ClientSearchComponent],
  providers: [ClientsService],
  exports: [ClientListComponent, ClientDetailsComponent]
})
export class ClientsModule { }
