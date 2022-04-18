import { Component, NgZone } from '@angular/core';
// import * as $ from 'jquery';
declare var $ :any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'th-wedding';
 
  constructor(private _ngZone: NgZone) {
    
  }
  ngAfterViewInit(): void {
    this._ngZone.runOutsideAngular(() => {
      setTimeout(()=>{
        // ($ as any).firefly({
        //   color: '#ffffff5f',
        //   minPixel: 1,
        //   maxPixel: 3,
        //   total : 35,
        //   on: '.snow'
        // });
        
      }) 
  });
    
    
  }
}
