import { Component, OnInit } from '@angular/core';
import { IntersectionStatus } from 'src/app/directive/from-intersection-observer';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {

  visibilityStatus: {[key: number]: IntersectionStatus} = {};
  intersectionStatus = IntersectionStatus;

  constructor() { }

  ngOnInit(): void {
  }

  onVisibilityChanged(status: IntersectionStatus) {
    // this.visibilityStatus[index] = status;
    console.log(status)
  }

}
