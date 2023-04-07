import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { StoreComponent } from './store/store.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SearchComponent,
    StoreComponent,
    ProfileComponent,
    RegisterComponent,
    LogoutButtonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,

    AuthModule.forRoot({
      domain: 'dev-g6wkqgune2a836yu.us.auth0.com',
      clientId: 'xi0XN15Hy2pbWAxukYbJ27VHvIuLlDtl',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),

    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
