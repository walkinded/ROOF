
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
$("input[type=tel]").mask("+7 (999)999-99-99");
$(".fancybox").fancybox();

/* ==================== to up scroller ==================== */ 
$(document).ready(function(){   
  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          $('#scroller').fadeIn();
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

$('.select').on('click', '.select__head', function () {
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