import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { StoreComponent } from './store/store.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { NewListingComponent } from './new-listing/new-listing.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent},
    { path: 'store', component:StoreComponent},
    { path: 'profile', component:ProfileComponent},
    { path: 'register', component:RegisterComponent},
    { path: 'listing', component:ListingDetailComponent},
    {path: 'new-listing', component:NewListingComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
