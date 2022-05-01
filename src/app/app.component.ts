import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  to: string;
  at: string; 

  constructor(private _ngZone: NgZone, private ref: ChangeDetectorRef, public loader: LoadingService, private route: ActivatedRoute) {
  }

  getInvitation(){
    if(this.to.includes('Chị') || this.to.startsWith('Anh')){
      return "Tới dự bữa cơm thân mật\nchung vui cùng gia đình chúng em"
    }

    if(this.to.startsWith('Bạn')){
      return "Tới dự bữa cơm thân mật\nchung vui cùng gia đình mình"
    }

    if(this.to.startsWith('Em')){
      return "Tới dự bữa cơm thân mật\nchung vui cùng gia đình anh chị"
    }

    return 'Tới dự bữa cơm thân mật\nchung vui cùng gia đình chúng tôi'
  }

  ngOnInit(): void {
    // this.to = this.route.snapshot.queryParamMap.get('to')
    // this.at = this.route.snapshot.queryParams.at;

    this.route.queryParams.subscribe((data) => {
      this.to = data?.to;
      this.at = data?.at;
    })
    console.log(this.to + ' ' + this.at);
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
