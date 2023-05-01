import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { ConfigService } from '../config.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dog-filter',
  templateUrl: './dog-filter.component.html',
  styleUrls: ['./dog-filter.component.css']
})
export class DogFilterComponent {
  constructor( private elRef:ElementRef, private http: HttpClient) {  }
  @Output() newItemEvent = new EventEmitter<string>();
  sendFilter(value: string, minPrice: number, maxPrice: number) {
    this.newItemEvent.emit(JSON.stringify([value, minPrice, maxPrice]));
  }
  onChange() {
    let filter, value: string;
    var filters: { [key: string]: string[]; } = {};
    for (let ele of this.elRef.nativeElement.getElementsByClassName("form-check-input")) {
      if (ele.checked) {
        filter = ele.getAttribute("id").split("_")[0];
        value = ele.getAttribute("id").split("_")[1];
        if (filters[filter] == undefined){
          filters[filter] = []
        }
        filters[filter].push(value);
      }
    }
    let minPrice = this.elRef.nativeElement.querySelector("#_minPrice").value
    let maxPrice = this.elRef.nativeElement.querySelector("#_maxPrice").value
    if (minPrice == ""){
      minPrice = "0"
    }
    minPrice = parseFloat(minPrice)
    if (maxPrice == ""){
      maxPrice = "1e100"
    }
    maxPrice = parseFloat(maxPrice)
    this.sendFilter(JSON.stringify(filters), minPrice, maxPrice)
  }
}
