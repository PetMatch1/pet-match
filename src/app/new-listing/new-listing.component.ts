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
  userId: String | undefined = ""
  photoId: String = ""
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
        window.location.replace("/search")
      }
      this.userId = user?.sub
    })
  }
  changePhoto() {
    let photo = document.getElementById("photo") as HTMLInputElement
    let photoField = document.getElementById("photoField") as HTMLInputElement
    var reader = new FileReader();
    if (photo.files == null){
      return
    }
    let file: any = photo.files[0]
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      photoField.value = reader.result as string
      document.getElementById("photoPreview")?.setAttribute("src", reader.result as string)
    }
    reader.onerror = function (e) {
      console.log("error")
      return
    }
  }
}
