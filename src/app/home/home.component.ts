import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedFile!: File;

  constructor(private router: Router, private modalService: NgbModal) { }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['http://localhost:4200/search'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  open(content: any): NgbModalRef {
    return this.modalService.open(content);
  }

  onFileSelected(event: any): void {
    this.selectedFile = <File>event.target.files[0];
  }

  upload(): void {
    console.log('Uploading file...');
    // Your upload logic here
  }
}
