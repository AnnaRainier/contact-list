import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsService } from './clients.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule, 
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ClientListComponent, ClientDetailsComponent],
  providers: [ClientsService],
  exports: [ClientListComponent, ClientDetailsComponent]
})
export class ClientsModule { }
