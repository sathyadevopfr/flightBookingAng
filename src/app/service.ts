import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddUpdateBulkAirports, Cities, ResponseBody } from "./modal";

@Injectable({ providedIn: 'root' })
export class HttpService {
  apiCommonUrl: string = 'https://freeapi.gerasim.in/api/FlightBooking/';

  constructor(private http: HttpClient) {}

  getAllCity(): Observable<ResponseBody> {
    return this.http.get<ResponseBody>(this.apiCommonUrl + `GetAllCity`);
  }
  bulkUpdateCity(obj: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(
      this.apiCommonUrl + `AddUpdateBulkCity`,
      obj
    );
  }

  getAllAirport(): Observable<ResponseBody> {
    return this.http.get<ResponseBody>(this.apiCommonUrl + `GetAllAirport`);
  }

  saveAirport(obj: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(
      this.apiCommonUrl + `AddUpdateBulkAirports`,
      obj
    );
  }
  getAllFlights(): Observable<ResponseBody> {
    return this.http.get<ResponseBody>(this.apiCommonUrl + `GetAllFlights`);
  }
  onLogin(obj: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(this.apiCommonUrl + `Login`, obj);
  }

  createFlight(obj: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(
      this.apiCommonUrl + `AddUpdateBulkFlights`,
      obj
    );
  }

  updatedFlys(obj: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(
      this.apiCommonUrl + `AddUpdateBulkFlights`,
      obj
    );
  }

  editsFly(obj: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(
      this.apiCommonUrl + `AddUpdateBulkFlights`,
      obj
    );
  }

  deleteFlight(flightId: number): Observable<ResponseBody> {
    return this.http.delete<ResponseBody>(
      this.apiCommonUrl + `DeleteFlightById?flightId=` + flightId
    );
  }
  searchFly(
    departureAirportId: number,
    arrivalAirportId: number,
    dateOfTravel: string
  ): Observable<ResponseBody> {
    return this.http.get<ResponseBody>(
      this.apiCommonUrl +
        `SearchFlight?departureAirportId=` +
        departureAirportId +
        `&arrivalAirportId=` +
        arrivalAirportId +
        `&dateOfTravel=` +
        dateOfTravel
    );
  }
  registerUser(obj: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(this.apiCommonUrl + `Register`, obj);
  }

  logintheUser(obj: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(this.apiCommonUrl+`Login`,obj)
  }

  bookTicket(flight:any):Observable<ResponseBody> {
    return this.http.post<ResponseBody>(
      this.apiCommonUrl + `bookticket`,
      flight
    );
  }

}