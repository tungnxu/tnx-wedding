import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-love-gift',
  templateUrl: './love-gift.component.html',
  styleUrls: ['./love-gift.component.scss']
})
export class LoveGiftComponent implements OnInit {

  isShow: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  showGift(){
    this.isShow = true;
  }

}
