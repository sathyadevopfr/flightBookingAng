import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Admin-Components/login/login.component';
import { LayoutComponent } from './Admin-Components/layout/layout.component';
import { AirportComponent } from './Admin-Components/airport/airport.component';
import { AllFlightsComponent } from './Admin-Components/all-flights/all-flights.component';
import { BookingsComponent } from './Admin-Components/bookings/bookings.component';
import { CityComponent } from './Admin-Components/city/city.component';
import { NewFlightComponent } from './Admin-Components/new-flight/new-flight.component';
import { SearchComponent } from './Website-Components/search/search.component';
import { BookFlightComponent } from './Website-Components/book-flight/book-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyBookingsComponent } from './Website-Components/my-bookings/my-bookings.component';
import { MainnavComponent } from './Website-Components/mainnav/mainnav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    AirportComponent,
    AllFlightsComponent,
    BookingsComponent,
    CityComponent,
    NewFlightComponent,
    SearchComponent,
    BookFlightComponent,
    MyBookingsComponent,
    MainnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
