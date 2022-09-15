import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie";
import {IUser} from "../modules/dashboard/types";

const oauthConfig: AuthConfig = {
  loginUrl: 'https://github.com/login/oauth/authorize',
  strictDiscoveryDocumentValidation: false,
  clientId: environment.OAUTH_CLIENT_ID,
  scope: 'user',
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private oAuthService: OAuthService,
    private httpService: HttpClient,
    private cookieService: CookieService,
  ) {
    this.configure()
  }
  private configure() {
    this.oAuthService.configure(oauthConfig)
    this.oAuthService.loadDiscoveryDocumentAndTryLogin()
  }

  login() {
    this.oAuthService.initLoginFlow()
  }
  signOut() {
    this.cookieService.remove('access_token')
    window.location.replace('https://github.com/logout')
  }
  getUser() {
    return this.httpService.get<IUser>('https://api.github.com/user').pipe((response) => response)
  }
  getToken() {
    return this.cookieService.get('access_token')
  }
  isUserLogin() {
    return this.getToken() !== undefined
  }
}
