import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetMatch';
  @ViewChild('content') content: any;
  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.content);
  }
}
