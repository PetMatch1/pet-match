import { Time } from "@angular/common";

export class Location {
    Coordinates: number[] = [];
    Type: string = "";
}

export class Bid {
}

export class Listing {
    _id: string = "";
    seller: string = "";
    price: number = 0;
    name: string = "";
    age: number = 0;
    breed: string = "";
    breed_size: string = "";
    color: string = "";
    gender: string = "";
    isActive: boolean = false;
    startDate: string = "";
    endDate: string = "";
    traitList: string[] = [];
    isBid: boolean = false;
    bid_list: Bid[] = [];
    zipcode: string = "";
    photo: string = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
}

export class getResponse {
    statusCode: number = 0;
    headers: Object = {};
    body: string = "";
}