import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Website-Components/search/search.component';
import { BookFlightComponent } from './Website-Components/book-flight/book-flight.component';
import { MyBookingsComponent } from './Website-Components/my-bookings/my-bookings.component';
import { LayoutComponent } from './Admin-Components/layout/layout.component';
import { AirportComponent } from './Admin-Components/airport/airport.component';
import { AllFlightsComponent } from './Admin-Components/all-flights/all-flights.component';
import { BookingsComponent } from './Admin-Components/bookings/bookings.component';
import { CityComponent } from './Admin-Components/city/city.component';
import { NewFlightComponent } from './Admin-Components/new-flight/new-flight.component';
import { LoginComponent } from './Admin-Components/login/login.component';
import { MainnavComponent } from './Website-Components/mainnav/mainnav.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  // { path: 'search', component: SearchComponent, title: 'Search Flight' },
  {
    path: '', component: MainnavComponent
    , children: [
      { path: 'book-flight', component: BookFlightComponent },
      {path:'search',component:SearchComponent}
  ]},
  {
    path: 'book-flight',
    component: BookFlightComponent,
    title: 'Book A Flight',
  },
  { path: 'bookings', component: MyBookingsComponent, title: 'My Bookings' },
   {path:'login',component:LoginComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'airport', component: AirportComponent },
       { path: 'all-flights', component: AllFlightsComponent },
       { path: 'all-bookings', component: BookingsComponent },
      { path: 'city', component: CityComponent },
      { path: 'new-flight', component: NewFlightComponent },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
