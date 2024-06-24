// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// document.addEventListener('DOMContentLoaded', function () {
//    const swiper = new Swiper('.swiper', {
//       modules: [Navigation, Pagination],
//       spaceBetween: 30,
//       centeredSlides: true,
//       slidesPerView: 3,
//       // centeredSlidesBounds: true,
//       loop: true,
//       autoplay: {
//          delay: 1500,
//          disableOnInteraction: false,
//       },
//       navigation: {
//          nextEl: '.swiper-button-next',
//          prevEl: '.swiper-button-prev',
//       }
//    });
// });

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

document.addEventListener('DOMContentLoaded', function () {
   let splide = new Splide('#splide-gallery', {
      // type: "loop",
      perPage: 3,
      padding: "8%",
      gap: 30,
      // gap: 65,
      pagination: false,
      autoplay: true,
      // autoplayInterval: 6e3,
      speed: 500,
      breakpoints: {
         640: {
            perPage: 1,
            padding: "2%",
            gap: 25
         },
         820: {
            perPage: 1,
            padding: "15%"
         },
         // 1023: {
         //    perPage: 1
         // }
      }
   }).mount();
});