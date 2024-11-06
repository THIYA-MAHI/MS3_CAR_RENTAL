import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  images = [
    { url: '/images/download.jpeg', title: 'Car 1' },
    { url: '/images/download.jpeg', title: 'Car 2' },
    { url: '/images/download.jpeg', title: 'Car 3' },
    { url: '/images/download.jpeg', title: 'Car 4' },
    { url: '/images/download.jpeg', title: 'Car 5' },
    { url: '/images/download.jpeg', title: 'Car 6' },
    { url: 'https://example.com/image2.jpg', title: 'Image 2' },
    { url: 'https://example.com/image3.jpg', title: 'Image 3' },
   
  ];
}
