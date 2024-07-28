export interface ResponseBody {
  message: string;
  result: boolean;
  data: [];
}

export interface Cities {
  cityId: number,
  cityName: string
}

export interface GetAllAirport{
    
      airportCode: string,
      airportId: number,
      airportName: string,
      cityId: number,
      cityName: string
    
}

export interface AddUpdateBulkAirports {
  airportId: number;
  airportCode: string;
  airportName: string;
  cityId: number;
}

export interface GetAllFlights {
  flightId: 10;
  flightNumber: string;
  arrivalTime: string;
  departureTime: string;
  price: number;
  totalSeats: number;
  arrivalAirportName: string;
  arrivalAirportCode: string;
  departureAirportName: string;
  departureAirportCode: string;
  vendorName: string;
  vendorLogoUrl: string;
  travelDate: string;
}

export interface AddUpdBulkFlights {
  flightId: number;
  flightNumber: string;
  departureAirportId: number;
  departureTime: string;
  arrivalAirportId: number;
  arrivalTime: string;
  price: number;
  totalSeats: number;
  flightVendorId: number;
  travelDate: string;
  vendorName: string;
  arrivalAirportName: string;
  vendorLogoUrl: string;
  departureAirportName: string;
}

export interface InfoData{
  toAirport: number;
  fromAirport: number;
  travelDate: string;
}