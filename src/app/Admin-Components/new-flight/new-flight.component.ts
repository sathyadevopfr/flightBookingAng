import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service';
import { AddUpdBulkFlights, GetAllAirport, ResponseBody } from '../../modal';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css',
})
export class NewFlightComponent implements OnInit {
  allAirports: GetAllAirport[] = [];

  flightObj: AddUpdBulkFlights = {} as AddUpdBulkFlights;

  constructor(private httpservice: HttpService) {
    const localdata = localStorage.getItem('FlightUser');
    if (localdata != null) {
      this.flightObj.flightVendorId = JSON.parse(localdata).vendorId;
    }
  }

  ngOnInit() {
    this.loadAirports();
  }

  loadAirports() {
    this.httpservice.getAllAirport().subscribe((result: ResponseBody) => {
      this.allAirports = result.data;
    });
  }

  onSaveFlight() {
    const obj = [this.flightObj];
     this.httpservice.createFlight(obj).subscribe(
      (result: ResponseBody) => {
        if (result.result) {
          alert('Flight Created SuccessFully')
        }
        else {
          alert(result.message)
        }
      }
    )
  }

}

