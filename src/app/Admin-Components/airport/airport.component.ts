import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service';
import { AddUpdateBulkAirports, Cities, GetAllAirport, ResponseBody } from '../../modal';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css',
})
export class AirportComponent implements OnInit {

  airportList: any[] = [];
  cityList: Cities[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() { 
    this.loadAirports();
    this.loadCity();
  }
  
  addNew() {
    const obj = {
      airportId: 0,
  airportCode: '',
  airportName: '',
  cityId: 0
    }
    this.airportList.unshift(obj)
  }

  loadAirports() {
    this.httpService.getAllAirport().subscribe(
      (res: ResponseBody) => {
        if (res != null) {
          this.airportList = res.data;
        }})}
   
  saveAll() {
    this.httpService
      .saveAirport(this.airportList)
      .subscribe((res: ResponseBody) => {
        if (res.result) {
          alert('Data Updated SuccessFully');
        } else {
          alert(res.message);
        }});}  
  
  loadCity() {
    this.httpService.getAllCity().subscribe(
      (city: ResponseBody) => {
        this.cityList = city.data;
         }
       )
     }
  
}
