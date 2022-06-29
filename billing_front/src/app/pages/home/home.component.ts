import { Component } from '@angular/core';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  constructor(
    clientService : ClientService
  ) {

    clientService.GetClient('1').subscribe(
      (client)=>{
        console.log(client);
      }
    );
  }


}
