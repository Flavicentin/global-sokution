// open & close menu: hamburguer 
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}


//link menu 
const links = document.querySelectorAll('nav ul li a');

for (const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show');
  })
}

//Back to top
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', function(){
  if(window.scrollY >= 560){
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
})

//swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination:{
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keybord: true,

  breakpoints:{
    767:{
      slidesPerView:2,
      setWrapperSize: true
    }
  }
});

// scrollreveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal('#home',{interval: 100});
scrollReveal.reveal('#about ',{interval: 100});
scrollReveal.reveal('#services',{interval: 100});
scrollReveal.reveal('#testimonials',{interval: 100});
scrollReveal.reveal('#contact',{interval: 100});
scrollReveal.reveal('footer .brand, footer',{interval: 100});

 