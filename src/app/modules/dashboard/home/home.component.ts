import { Component, OnInit } from '@angular/core';
import {CasesService} from "../../../services/cases.service";
import {ICountry, IVaccines} from "../types";
import {MatSelectChange} from "@angular/material/select";
import {switchMap, tap} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private casesService: CasesService) {}
  countries: string[]
  country: ICountry
  countryVaccines: IVaccines
  isLoading = true

  onSelectChanged(country: MatSelectChange) {
    this.isLoading = true
    this.casesService.getCase(country.value)
      .pipe(
        tap((r) => {
          this.country = r.All
        }),
        switchMap(() => this.casesService.getVaccines(country.value))
      )
      .subscribe((res) => {
      this.countryVaccines = res.All
      this.isLoading = false
    })
  }


  ngOnInit() {
    this.casesService.getCases()
      .pipe(
        tap((r) => {
          this.isLoading = true
          this.countries = Object.keys(r)
        }),
        switchMap(() => this.casesService.getCase()),
        tap((c) => {
          this.country = c.All
        }),
        switchMap(() => this.casesService.getVaccines())
      )
      .subscribe((res) => {
        this.countryVaccines = res.All
        this.isLoading = false
    })
  }
}
