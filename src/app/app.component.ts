import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { LoadingService } from './loading.service';
// import * as $ from 'jquery';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'th-wedding';
  isShowInfo = false
  loading$ = this.loader.loading$;
  constructor(private _ngZone: NgZone, private ref: ChangeDetectorRef, public loader: LoadingService) {
  }

  ngOnInit(): void {
    this.loader.show();
    this.ref.detectChanges();
    
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.loader.hide();
      setTimeout(()=>{
        this.isShowInfo= true;
      },1000)
     
      // this.ref.detectChanges();
    window.scrollTo({ top: 0});

    },2000)

    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        ($ as any).firefly({
          color: '#ffffff5f',
          minPixel: 1,
          maxPixel: 3,
          total : 35,
          on: '.snow'
        });

      })
    });


  }
}
