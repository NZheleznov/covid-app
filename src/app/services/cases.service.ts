import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICountry, ICountryResponse, IHistory, IVaccines} from "../modules/dashboard/types";


@Injectable({
  providedIn: 'root'
})
export class CasesService {
  constructor(private httpService: HttpClient) {}
  private baseUrl = 'https://covid-api.mmediagroup.fr/v1'
  getCases() {
    return this.httpService.get(this.baseUrl + '/cases')
  }
  getCase(country: string = 'Germany') {
    return this.httpService.get<ICountryResponse<ICountry>>(this.baseUrl + `/cases?country=${country}`)
  }
  getVaccines(country: string = 'Germany') {
    return this.httpService.get<ICountryResponse<IVaccines>>(this.baseUrl + `/vaccines?country=${country}`)
  }
  getHistory(country: string = 'Germany', status: string = 'confirmed') {
    return this.httpService.get<ICountryResponse<IHistory>>(this.baseUrl + `/history?country=${country}&status=${status}`)
  }
}
