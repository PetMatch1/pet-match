import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConfigService } from '../config.service';
import { Listing } from '../datatypes';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient, private auth: AuthService){}
  userId: String | undefined = ""
  listing: Listing = {
    _id: '',
    seller: '',
    price: 0,
    name: '',
    age: 0,
    breed: '',
    breed_size: '',
    color: '',
    gender: '',
    isActive: false,
    startDate: '',
    endDate: '',
    traitList: [],
    isBid: false,
    bid_list: [],
    zipcode: '',
    photo: ''
  }
  formatDate(date: string){
    let dateObj = new Date(date)
    return dateObj.toLocaleDateString()
  }
  auctionOrBuy(listing: Listing){
    if (listing.isBid){
      return "Auction"
    } else {
      return "Buy Now"
    }
  }
  buy (listing: Listing){
    window.alert(`You have purchased ${listing.name} for $${listing.price}!`)
  }
  deleteListing() {
    if (window.confirm("Are you sure?")){
      window.location.replace("/.netlify/functions/delete_listing?id=" + this.listing._id)
    }
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        let idObject = {
          id: [params["id"]]
        }
        let config = new ConfigService(this.http);
        config.getListings(JSON.stringify(idObject)).subscribe(data => {
          this.listing = JSON.parse(data.body)[0]
          console.log(this.listing)
        })

    })
    this.auth.user$.subscribe(user => {
      this.userId = user?.sub
    })
  }
}
