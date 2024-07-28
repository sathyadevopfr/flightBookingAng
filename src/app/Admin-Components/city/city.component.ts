import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service';
import { Cities, ResponseBody } from '../../modal';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
})
export class CityComponent implements OnInit {
  cityList: Cities[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getAllCities();
  }

  getAllCities() {
    this.httpService.getAllCity().subscribe((res: ResponseBody) => {
      if (res != null) {
        this.cityList = res.data;
        if (res.message) {
          alert(res.message);
        }
      }
    });
  }

  bulkUpdateCities() {
   
    this.httpService.bulkUpdateCity(this.cityList).subscribe(
      (res: ResponseBody) => {
        if (res != null) {
          alert("Bulk Update Success");
           if (res != null) {
             alert(res.message);
           }
           else {
             console.log('An Error Ocuured')
          }
        }
       }
    )
  }

  addNew() {
    const obj = {
      cityId: 0,
      cityName:''
    }
    this.cityList.unshift(obj)
  }
}
