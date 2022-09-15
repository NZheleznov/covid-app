import { Component, OnInit } from '@angular/core';
import {CasesService} from "../../../services/cases.service";
import {switchMap, tap} from "rxjs";
import {MatSelectChange} from "@angular/material/select";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  constructor(private casesService: CasesService) {}
  country = new FormControl('')
  countries: string[]
  dates: string[]
  values: number[]
  isLoading = true

  onSelectChanged(country: MatSelectChange) {
    this.isLoading = true
    this.casesService.getHistory(country.value)
      .subscribe((res) => {
        this.dates = Object.keys(res.All.dates)
        this.values = Object.values(res.All.dates)
        this.isLoading = false
      })
  }

  ngOnInit(): void {
    this.isLoading = true
    this.casesService.getCases()
      .pipe(
        tap((c) => this.countries = Object.keys(c)),
        switchMap(() => this.casesService.getHistory())
      )
      .subscribe((r) => {
        this.dates = Object.keys(r.All.dates)
        this.values = Object.values(r.All.dates)
        this.country = new FormControl(r.All.country)
        this.isLoading = false
      })
  }

}
