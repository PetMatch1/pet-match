import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  Dogs: Dog[] = [
    'Bulldog',
    'Poodle',
    'Labrador Retriever',
    'German Shepherd',
    
  ]
}
