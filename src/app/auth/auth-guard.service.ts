import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private oauthService: OAuthService) {
  }

  private isAuthenticated: boolean = false;

  canActivate() {
    if (this.oauthService.hasValidAccessToken()) {
      return true;
    }
    else {
      this.oauthService.initImplicitFlow();
    }
  }

}