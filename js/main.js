const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');  

window.addEventListener('scroll', _.throttle(function (){

  if(window.scrollY > 500){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // badgeEl.style.display ='none';
    // 버튼보이기
    gsap.to(toTopEl, .2, { 
      x: 0
    });
  }
  else{
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // badgeEl.style.display ='block';
    // 버튼숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7 1.4 2.1 2.8
    opacity: 1
  })
})

//선택자, 옵션
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', //기본
  slidesPerView: 3,  // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides : true,  //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
     delay: 3000 
  },
  pagination : {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})
new Swiper('.awards .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})

 
const btn_prom_pic = document.querySelector('.btn_prom');
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
    btn_prom_pic.setAttribute("src", "./images/btn_prom_down.png");
    
  }
  else{
    //활성화 처리
    promotionEl.classList.remove('hide');
    btn_prom_pic.setAttribute("src", "./images/btn_prom_up.png");
  }

});


function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  //gsap.to(요소, 시간, 옵션)
  //easing 함수 :  greensock ease //https://greensock.com/docs/v2/Easing
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    } 
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20); 

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: .8
  }).setClassToggle(spyEl, 'show').addTo(new ScrollMagic.Controller());
})


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
