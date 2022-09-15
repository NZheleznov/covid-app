import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {IUser} from "./types";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}
  user: IUser | null

  ngOnInit() {
    this.authService.getUser().subscribe((res) => {
      this.user = res
    })
  }
}
