import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ConfigService } from '../config.service';
import { Listing } from '../datatypes';

@Component({
  selector: 'app-update-listing',
  templateUrl: './update-listing.component.html',
  styleUrls: ['./update-listing.component.css']
})
export class UpdateListingComponent {
  constructor(public auth: AuthService, private route: ActivatedRoute, private http: HttpClient, private elRef:ElementRef) {}
  buttonText: String = "Sell"
  userId: String | undefined = ""
  listing: Listing = {} as Listing
  photo: HTMLInputElement = document.getElementById("photo") as HTMLInputElement
  swapButton() {
    if (this.buttonText == "Sell"){
      this.buttonText = "Auction"
    } else {
      this.buttonText = "Sell"
    }
  }
  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user == undefined) {
        window.alert("Please login to create a listing")
      }
      this.userId = user?.sub
      this.photo = document.getElementById("photo") as HTMLInputElement
      this.route.queryParams.subscribe(params => {
        let idObject = {
          id: [params["id"]]
        }
        let config = new ConfigService(this.http);
        config.getListings(JSON.stringify(idObject)).subscribe(data => {
          this.listing = JSON.parse(data.body)[0]
          Object.keys(this.listing).forEach(element => {
            if (element == "isBid"){
              if (this.listing.isBid){
                this.swapButton()
              }
            }
            console.log(document.getElementById("gender"))
            let temp: any = this.listing
            let val: string = temp[element]
            let htmlElement:  HTMLInputElement = document.getElementById(element) as HTMLInputElement
            if (htmlElement != null){
              htmlElement.value = val
            }

          })
        })

    })
    })
  }
  changePhoto() {
    this.photo = document.getElementById("photo") as HTMLInputElement
  }
}
