
/* ==================== scrolled header ==================== */ 
$('.navigation').addClass('original').clone().insertAfter('.navigation').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}

/* ==================== libs ==================== */ 
$("input[type=tel]").mask("+7 (999) 999-99-99");
$(".fancybox").fancybox();

/* ==================== to up scroller ==================== */ 
$(document).ready(function(){   
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('#scroller').fadeIn();
          $('#scroller').css({'display': 'flex'})
      } else {
          $('#scroller').fadeOut();
      }
  });
  $('#scroller').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 400);
      return false;
  });
});
/* ==================== Seleck Btn ==================== */ 

$('.select').on('mouseover', '.select__head', function () {
  if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().fadeOut();
  } else {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
      $(this).addClass('open');
      $(this).next().fadeIn();
  }
});

$(document).click(function (e) {
  if (!$(e.target).closest('.select').length) {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
  }
});


/* ==================== mobile menu ==================== */ 
$(function() {
  $('.header__button-menu').click(function() {
    $('body').addClass('overflow-hidden');
    $('.header__mobile').fadeIn();
  });

  $('.header__mobile-close').click(function() {
    $('body').removeClass('overflow-hidden');
    $('.header__mobile').fadeOut();
  });
});

/* ==================== TABS ==================== */ 
$(document).ready(function($) {
  $('.tab_content').hide();
  $('.tab_content:first').show();
  $('.tabs li:first').addClass('active');
  $('.tabs li').click(function(event) {
    event.preventDefault();
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});

$(document).ready(function($) {
  $('.select-roof').hide();
  $('.select-roof:first').show();
  $('.roofs-tabs__wrap li:first').addClass('main-calc_bg-active');
  $('.roofs-tabs__wrap li').click(function(event) {
    event.preventDefault();
    $('.roofs-tabs__wrap li').removeClass('main-calc_bg-active');
    $(this).addClass('main-calc_bg-active');
    $('.select-roof').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});

$(document).ready(function($) {
  $('.about-company__tab_content').hide();
  $('.about-company__tab_content:first').show();
  $('.a-c__tabs li:first').addClass('a-c__tabs_active');
  $('.a-c__tabs li').click(function(event) {
    event.preventDefault();
    $('.a-c__tabs li').removeClass('a-c__tabs_active');
    $(this).addClass('a-c__tabs_active ');
    $('.about-company__tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});


$('.select-material__wrap .select-material__btn:first').addClass('main-calc_bg-active');
$('.select-material__wrap .select-material__btn').click(function() {
  $('.select-material__btn').removeClass('main-calc_bg-active');
  $(this).addClass('main-calc_bg-active');
});

/* ==================== accordeon ==================== */
$(document).ready(function() {
  $('#accordion .accordion__wrap .accordion__head').on('click', function(){
    $(this).closest('#accordion').find('.accordion__body').not($(this).next()).slideUp(500);
    $(this).closest('#accordion').find('.accordion__head i').not($(this).find('i')).removeClass('rotate');
    $(this).siblings('.accordion__body').slideToggle(500);
    $(this).find('i').toggleClass('rotate');
  });

  $('.catalog__nav #accordion .accordion__wrap .accordion__head').on('click',function() {
    $(this).closest('#accordion').find('.accordion__head').not($(this)).removeClass('accordion__head_active');
    $(this).toggleClass('accordion__head_active');
  });
});


$('.catalog__nav_mobile').on('click', function(){
  $(this).siblings('#accordion').slideToggle(500);
  $(this).find('i').toggleClass('rotate');
});


/* ==================== REGULAR ==================== */
$('.form-control').keyup(function(){
  var Value = $(this).val();
  // $(this).siblings('.form-row__title').addClass('form-row__title-active')

  
  if(Value === '0') {
    $(this).siblings('.error-msg').css({'display':'block'});
  } else {
    $(this).siblings('.error-msg').css({'display':'none'});
  }

  if(Value.length == '') {
    $(this).siblings('.form-row__title').removeClass('form-row__title-active');
  } else {
    $(this).siblings('.form-row__title').addClass('form-row__title-active')
  }
});

$('.form-control').on('focus',function(){
  $(this).siblings('.form-row__title').addClass('form-row__title-active')
});

// $(document).on('click', function(e) {
//   if (!$(e.target).closest(".form-control").length) {
   
//   }
//   e.stopPropagation();
// });

/* ==================== SLIDER ==================== */

$('.gallery-img__slider-small').slick({
  slidesToShow: 3,
  vertical: true,
  arrows: false,
  focusOnSelect: true,
  verticalSwiping: true,
  asNavFor: ".gallery-img__slider-big",
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    }
  ]
});

$('.gallery-img__slider-big').slick({
  slidesToShow: 1,
  arrows: false,
  pagination: true,
  asNavFor: ".gallery-img__slider-small",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    },
  ]
});

$('.about-company__slider').slick({
  slidesToShow: 1,
  arrows: true,
  pagination: false,
  prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
  nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    },
  ]
});