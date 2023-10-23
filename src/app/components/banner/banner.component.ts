import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  @Input()
  bannerImage:string = ""
  @Input()
  bannerImage2:string = ""
  @Input()
  bannerTitle:string = ""
  @Input()
  bannerDescription:string = ""

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
