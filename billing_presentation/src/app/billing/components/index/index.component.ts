import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public client: any;
  public colCountByScreen: object;

  constructor() {

    this.client =
    {
      IdClient:22,
      Name1:'dfsdsd',
      Name2:'fgdfgdfg',
      LastName1:'fgdfgdfg',
      LastName2:'fgdfgdfg',
      BirthDate: new Date("01/01/1900"),
      IdentNum: 33
    }
    ;

    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };

   }

  ngOnInit(): void {
  }

}
