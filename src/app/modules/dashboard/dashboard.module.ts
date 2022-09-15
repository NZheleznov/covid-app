import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {HomeComponent} from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { HistoryComponent } from './history/history.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {VaccinatedPipe} from "../../pipes/vaccinated.pipe";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ChartComponent } from './chart/chart.component';
import {NgChartsModule} from "ng2-charts";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [DashboardComponent, HomeComponent, HeaderComponent, HistoryComponent,  VaccinatedPipe, ChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
