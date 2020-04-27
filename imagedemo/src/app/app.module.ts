import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { FilterimagesPipe } from './filterimages.pipe';

import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';  
import { ImageService } from './image.service';    
// import { appRoutes } from '../routes'; 

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    ImageDetailsComponent,
    FilterimagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    RouterModule//.forRoot(appRoutes) 
  ],
  providers: [ImageService, FilterimagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
