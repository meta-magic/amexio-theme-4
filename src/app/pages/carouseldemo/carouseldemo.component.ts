/**
 * Created by sagar on 2/8/17.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carouseldemo',
  templateUrl: 'carouseldemo.html'
})

export class CarouselDemoComponent implements OnInit {

  viewData:any;
  dealData:any;
  ngOnInit(){};
  constructor() {
 this.dealData=[
   {
     "price":"1099",
     "img":"assets/images/carousel/deals/1.jpg",
     "desc":"Slicer and Dicer Kitchen Set (12-Piece)",
     "rating":3,
     "active" : true
   },
   {
     "price":"299",
     "img":"assets/images/carousel/deals/2.jpg",
     "desc":"Ultimate Skin Spa Facial Cleanser and Massaging Brush System"
   },
   {
     "price":"99",
     "img":"assets/images/carousel/deals/3.jpg",
     "desc":"10 Ft Apple-Certified Braided Lightning Cable (1-, 2-, or 3-Pack)"
   },
   {
     "price":"2499",
     "img":"assets/images/carousel/deals/4.jpg",
     "desc":"Stainless Steel Milanese Loop Replacement Band for 38mm or 42mm Apple Watches"
   },
   {
     "price":"2499",
     "img":"assets/images/carousel/deals/5.jpg",
     "desc":"Men's Single- or Double-Breasted Wool-Blend Coat"
   },
   {
     "price":"1999",
     "img":"assets/images/carousel/deals/6.jpg",
     "desc":"Sonic-FX Duo Electric Toothbrushes"
   },
   {
     "price":"399",
     "img":"assets/images/carousel/deals/7.jpg",
     "desc":"Sorbus Fridge and Freezer Organizer Bins Set (6-Piece)"
   },
 ];

   this.viewData=
        [
          {
            quote:"Only I can change my life. No one can do it for me.",
            by:"Carol Brunett"
          },
          {
            quote:"Life is 10% what happens to you and 90% how you react to it.",
            by:"Charles R. Swindoll"
          },
          {
            quote:"It does not matter how slowly you go as long as you do not stop.",
            by:"Confucius"
          },
          {
            quote:"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
            by:"Helen Keller"
          },
          {
            quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
            by:"Ayn Rand"
          },
          {
            quote:"You can't cross the sea merely by standing and staring at the water",
            by : "Rabindranath Tagore"
          },
          {
            quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
            by:"Michael Jordan"
          },
          {
            quote:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
            by:"Henry Ford"
          },
          {
          quote :"I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
          by:"Mother Teresa"
        }
        ];
    };

  }
