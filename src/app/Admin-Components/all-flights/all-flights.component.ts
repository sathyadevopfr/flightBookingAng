import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service';
import { AddUpdBulkFlights, GetAllFlights, ResponseBody } from '../../modal';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrl: './all-flights.component.css',
})
export class AllFlightsComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  flightList: GetAllFlights[] = [];
 
  updatedFly: AddUpdBulkFlights[] = [];

  ngOnInit() {
    this.getFlights();
    // this.getUpdatedFlights();
  }

  getFlights() {
    this.httpService.getAllFlights().subscribe((result: ResponseBody) => {
      this.flightList = result.data;
    });
  }

//   getUpdatedFlights() {
//     const obj = [this.flightList];
//     this.httpService.updatedFlys(obj).subscribe(
//       (result: ResponseBody) => {
//         if (result != null) {
//           this.updatedFly = result.data;
//         }
//      }
//    )
//  }

  editFlight(flightId: number) {
  // const obj=[this.flightList[flightId]]
  //   this.httpService.editsFly(flightId).subscribe((res: any) => {
  //     if (res.result) {
  //      alert('Edited SuccessFully')
  //     }
  //     else {
  //        alert(res.message);
  //     }
    // });
  }

  removeFlight(flightId:number) {
    this.httpService.deleteFlight(flightId).subscribe(
      (result:ResponseBody) => {
        if (result) {
          alert('Flight Removed From The List')
        }
        
      }
    )
  }

}
