export interface IUser {
  avatar_url: string;
  login: string;
  url: string;
  id: number;
  name: null | string;
}


export interface ICountry {
  abbreviation: string;
  capital_city: string;
  confirmed: number;
  continent: string;
  country: string;
  deaths: number;
  elevation_in_meters: number;
  iso: number;
  life_expectancy: number;
  location: string;
  population: number;
  recovered: number;
  sq_km_area: number;
}

export interface IVaccines extends ICountry {
  administered: number;
  people_vaccinated: number;
  people_partially_vaccinated: number;
  lat: string;
  long: string;
  updated: string;
}

export interface IHistory extends ICountry {
  dates: {
      [index: string]: number
  }
}

export interface ICountryResponse<T> {
  All: T
}
