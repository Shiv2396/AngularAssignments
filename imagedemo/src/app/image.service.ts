import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  allImages = [];    
    
  getImages() {    
      return this.allImages = Imagesdelatils.slice(0);    
  }    
  
  getImage(id: number) {    
      return Imagesdelatils.slice(0).find(Images => Images.id == id)    
  }    
}    
const Imagesdelatils = [    
  // { "id": 1, "brand": "Apple", "url": "assets/Images/Macbook1.jpg" },    
  // { "id": 2, "brand": "Apple", "url": "assets/Images/MacBook.jpg" },    
  { "id": 3, "brand": "Childern", "url": "assets/Images/baby1.jpg" },    
  { "id": 4, "brand": "Childern", "url": "assets/Images/baby2.jpg" },    
  { "id": 5, "brand": "Forest", "url": "assets/Images/forest1.jpg" },        
  { "id": 9, "brand": "Forest", "url": "assets/Images/forest2.jpg" },    
  { "id": 10, "brand": "Forest", "url": "assets/Images/forest3.jpg" },    
  { "id": 11, "brand": "Rose", "url": "assets/Images/rose1.jpg" },    
  { "id": 12, "brand": "Rose", "url": "assets/Images/rose2.jpg" },    
  { "id": 13, "brand": "Rose", "url": "assets/Images/rose3.jpg" },    
  // // { "id": 14, "brand": "asus", "url": "assets/Images/laptop13.jpg" },    
  // { "id": 15, "brand": "asus", "url": "assets/Images/laptop14.jpg" },    
  // { "id": 16, "brand": "asus", "url": "assets/Images/laptop15.jpg" },    
  // { "id": 17, "brand": "asus", "url": "assets/Images/laptop16.jpg" },    
  // { "id": 18, "brand": "asus", "url": "assets/Images/laptop17.jpg" },    
  // { "id": 19, "brand": "asus", "url": "assets/Images/laptop18.jpg" },    
  // { "id": 20, "brand": "asus", "url": "assets/Images/laptop20.jpg" },    
  
]    