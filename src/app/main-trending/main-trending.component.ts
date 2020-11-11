import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-trending',
  templateUrl: './main-trending.component.html',
  styleUrls: ['./main-trending.component.css']
})
export class MainTrendingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
