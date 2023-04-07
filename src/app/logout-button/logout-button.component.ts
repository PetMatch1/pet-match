import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button class="logout-btn" (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button class="login-btn" (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  styles: [`
    button {
      border-radius: 20px;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
    }
    
    .login-btn {
      background-color: #003459;
      color: white;
    }
    
    .logout-btn {
      background-color: red;
      color: white;
    }
  `],
})
export class LogoutButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}