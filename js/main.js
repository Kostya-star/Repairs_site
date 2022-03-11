// document.addEventListener("DOMContentLoaded", function(event) { 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);

//   });
//   closeBtn.addEventListener('click', switchModal);
  
// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  var next = $('.swiper-button-next');
  
  next.css('left', prev.width() + 10 + bullets.width() +62)
  bullets.css('left', prev.width() + 10)

  new WOW().init();
});



// var next = document.getElementsByClassName('.swiper-button-next');
// var prev = document.getElementsByClassName('swiper-button-prev');
// var bullets = document.getElementsByClassName('.swiper-pagination');

// next.css('left', prev.width() + 10 + bullets.width() +10)
// bullets.css('left', prev.width() + 10)

var next = $('.swiper-button-next');
var prev = $('swiper-button-prev');
var bullets = $('.swiper-pagination');

next.css('left', prev.width() + 10 + bullets.width() +10)
bullets.css('left', prev.width() + 10)

