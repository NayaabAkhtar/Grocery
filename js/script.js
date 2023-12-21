const searchform=document.querySelector('.search-form');
const searchbtn=document.querySelector('#search-btn');

searchbtn.addEventListener('click', ()=>{
     searchform.classList.toggle('active');
     shoppingcart.classList.remove('active');
     loginform.classList.remove('active');
     navbar.classList.remove('active');
})

const shoppingcart=document.querySelector('.shopping-cart');
const cartbtn=document.querySelector('#cart-btn');

cartbtn.addEventListener('click', ()=>{
     shoppingcart.classList.toggle('active');
     searchform.classList.remove('active');
     loginform.classList.remove('active');
     navbar.classList.remove('active');
     
})

const loginform=document.querySelector('.login-form');
const loginbtn=document.querySelector('#login-btn');

loginbtn.addEventListener('click', ()=>{
     loginform.classList.toggle('active');
     searchform.classList.remove('active');
     shoppingcart.classList.remove('active');
     navbar.classList.remove('active');
})

const navbar=document.querySelector('.navbar');
const menubtn=document.querySelector('#menu-btn');

menubtn.addEventListener('click', ()=>{
     navbar.classList.toggle('active');
     searchform.classList.remove('active');
     shoppingcart.classList.remove('active');
     loginform.classList.remove('active');
})

window.onscroll= () =>{
     searchform.classList.remove('active');
     shoppingcart.classList.remove('active');
     loginform.classList.remove('active');
     navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
     loop: true,
     spaceBetween: 20,
     autoplay: {
          delay: 7500,
          disableOnInteraction: false,
     },
     
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1020: {
         slidesPerView: 3,
       },
     },
   });

   var swiper = new Swiper(".review-slider", {
     loop: true,
     spaceBetween: 20,
     autoplay: {
          delay: 7500,
          disableOnInteraction: false,
     },
     
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1020: {
         slidesPerView: 3,
       },
     },
   });