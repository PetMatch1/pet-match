import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getResponse } from './datatypes';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Listing } from './datatypes';

@Injectable()
export class ConfigService {

  constructor (private http: HttpClient) {}

  public getListings(options: string) {
    let optionsParsed = JSON.parse(options)
    let Listings: Listing[];
    let url: string = location.origin + '/.netlify/functions/get_listings?'
    Object.keys(optionsParsed).forEach(function(element: any){
      optionsParsed[element].forEach(function(value: any){
        url += element + "=" + value + "&"
        })
    });
    return this.http.get<getResponse>(url)
  }
  public deleteListing(id: string) {
    let url: string = location.origin + '/.netlify/functions/delete_listing?id=' + id
    return this.http.get<getResponse>(url)
  }
}
