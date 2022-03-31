import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
