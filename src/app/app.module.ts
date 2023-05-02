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
import { ProductViewComponent } from './product-view/product-view.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DogFilterComponent } from './dog-filter/dog-filter.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SearchComponent,
    StoreComponent,
    ProfileComponent,
    RegisterComponent,
    ProductViewComponent,
    LogoutButtonComponent,
    UserProfileComponent,
    DogFilterComponent,
    FooterComponent,
    ProductComponent,
    ListingDetailComponent
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
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
