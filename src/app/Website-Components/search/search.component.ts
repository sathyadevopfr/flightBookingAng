import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../service';
import { GetAllAirport, GetAllFlights, InfoData, ResponseBody } from '../../modal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  airports: GetAllAirport[] = [];

  infoData: InfoData = {} as InfoData;

  passengerObj: any = {
    travelerName: '',
    contactNo: '',
    aadharNo: '',
    seatNo: 0,
  };

  bookingObject: any = {
    flightId: 0,
    customerId: 0,
    bookingDate: new Date(),
    totalAmount: 0,
    FlightBookingTravelers: [],
  };

  aiportDetails: GetAllFlights[] = [];

  arportCities = {
    departureCity: '',
    arrivalCity: '',
  };

  passengerList: any[] = [];

  @ViewChild('bookTicket') bookTicket: ElementRef | undefined;
  flightList: any[] = [];

  constructor(private httpService: HttpService) {
    const isLocal = localStorage.getItem('flightCustomer');
    if (isLocal != null) {
      this.bookingObject.customerId = JSON.parse(isLocal).userId;
    }
  }

  loadAirports() {
    this.httpService.getAllAirport().subscribe((res: ResponseBody) => {
      this.airports = res.data;

      // if (this.airports != null) {
      //   for (let air of this.airports) {
      //     this.aiportDetails.cityName = air.;

      //     this.aiportDetails.airportName = air.airportName;
      //   }

      // }
    });
  }
  ngOnInit() {
    this.loadAirports();
  }
  searchFlight() {
    this.httpService
      .searchFly(
        this.infoData.fromAirport,
        this.infoData.toAirport,
        this.infoData.travelDate
      )
      .subscribe((result: ResponseBody) => {
        this.flightList = result.data;
      });
  }
  getCity() {
    this.httpService.getAllFlights().subscribe((result: ResponseBody) => {
      if (result != null) {
        this.aiportDetails = result.data;
        for (let er of this.aiportDetails) {
          this.arportCities.departureCity = er.departureAirportName;
          this.arportCities.arrivalCity = er.arrivalAirportName;
        }
      }
    });
  }
  bookTickets(flightId: number) {
    this.bookingObject.flightId = flightId;
    if (this.bookTicket != null) {
      this.bookTicket.nativeElement.style.display = 'block';
    }
  }
  closeBooking() {
    if (this.bookTicket != null) {
      this.bookTicket.nativeElement.style.display = 'none';
    }
  }
  addPassenger() {
    const object = JSON.stringify(this.passengerObj);
    const newObject = JSON.parse(object);
    this.passengerList.push(newObject);
  }
  onBookTicket() {
    this.bookingObject.FlightBookingTravelers = this.passengerList;
    this.httpService
      .bookTicket(this.bookingObject)
      .subscribe((result: ResponseBody) => {
        if (result.result) {
          alert('Ticekt Booked SuccessFully');
          this.closeBooking();
        } else {
          alert(result.message);
        }
      });
  }
}

