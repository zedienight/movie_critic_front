import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  ngOnInit(): void {
  }
  
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content)
  }

  open1(content1) {
    this.modalService.open(content1)
  }

}