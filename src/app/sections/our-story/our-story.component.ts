import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IntersectionStatus } from 'src/app/directive/from-intersection-observer';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {
  @ViewChild('frame1', { static: true }) frame1: any
  @ViewChild('frame2', { static: true }) frame2: any
  @ViewChild('frame3', { static: true }) frame3: any
  @ViewChild('frame4', { static: true }) frame4: any

  isShowImage1 = false
  isShowImage2 = false
  isShowImage3 = false
  isShowImage4 = false

  visibilityStatus: { [key: number]: IntersectionStatus } = {};
  intersectionStatus = IntersectionStatus;

  constructor() { }

  ngOnInit(): void {
  }

  onVisibilityChanged(status: IntersectionStatus, index: number) {
    // this.visibilityStatus[index] = status;
    switch (index) {
      case 1:
        setTimeout(()=>{
          this.frame1.nativeElement.play()
          this.isShowImage1 = true
        },1000)
        break;
      case 2:
        setTimeout(()=>{
          this.isShowImage2 = true
        this.frame2.nativeElement.play()
        },1000)
        break;
      case 3:
        setTimeout(()=>{
          this.isShowImage3 = true
        this.frame3.nativeElement.play()
       },1500)
        break;
      case 4:
        setTimeout(()=>{
          this.isShowImage4 = true
        this.frame4.nativeElement.play()
      },2000)
        break;
    }
  }

}
