import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {DataServiceService} from './data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService]
})
export class AppComponent {
  title = 'Angular Mr. Rahul';
  coutryName :any;
  countryDetails : any;
  stateDetails : any;
  stateName :any;
  statusMessage : string = 'Loading Data Please Wait ...' ;
  constructor(  private dataservice : DataServiceService) {
  }

   ngOnInit():void{
    // this.getCountryDetails();
     this.coutryName = [{"key":1, "value":"India"},{"key":2, "value":"Russia"},{"key":3, "value":"Australia"} ];
     this.stateDetails = [{"countryName":"India","value":[{"key":1,"value":"karnataka"},{"key":2,"value":"Bihar"},{"key":3,"value":"Bangal"}]},{"countryName":"Russia","value":[{"key":1,"value":"Abakan"},{"key":2,"value":"Abaza"},{"key":3,"value":"Abazatl"}]},{"countryName":"Australia","value":[{"key":1,"value":"Queensland"},{"key":2,"value":"New South Wales"},{"key":3,"value":"Victoria"}]}];
     this.stateName = this.stateDetails.filter(function(e){return e.countryName == 'India'});
   }

   searchReport($event, value){
     this.stateName = this.stateDetails.filter(function(e){return e.countryName == value});
     console.log(value);
   }
}
