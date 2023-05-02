import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent {
  constructor(public auth: AuthService) {}
  buttonText: String = "Sell"
  swapButton() {
    if (this.buttonText == "Sell"){
      this.buttonText = "Auction"
    } else {
      this.buttonText = "Sell"
    }
  }
  ngOnInit() {
    this.auth.user$.subscribe(user => {
      console.log(user)
    })
  }
}
