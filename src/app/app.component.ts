import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth/auth-config';

import { UsuarioService } from './comum/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fillerNav = [
    'Relatório',
    'Administração'
  ];

  constructor(private oauthService: OAuthService, private usuarioService: UsuarioService) {

    this.oauthService.events
    .pipe(filter(e => ['token_received'].includes(e.type)))
    .subscribe(e => { 
      this.oauthService.loadUserProfile().then(res => {
        let claims: any = this.oauthService.getIdentityClaims();
        if (claims) {
          this.usuarioService.cadastrarUsuario("007777777", claims.name, claims.email).subscribe();
        }
      });
    });

    this.configureWithNewConfigApi();

  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get name() {    
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims.name;
  }

}
