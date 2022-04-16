import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OurStoryComponent } from './sections/our-story/our-story.component';
import { IntersectionObserverDirective } from './directive/intersection-observer.directive';
import { CountDownComponent } from './components/count-down/count-down.component';
import { GalleryComponent } from './sections/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    IntersectionObserverDirective,
    CountDownComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
