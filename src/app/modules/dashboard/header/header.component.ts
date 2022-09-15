import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../types";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService) {
  }
  @Input() user: IUser | null

  logout() {
    this.authService.signOut()
  }
}
