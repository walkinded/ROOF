
/* ==================== scrolled header ==================== */ 
$('.header_bg-color').addClass('original').clone().insertAfter('header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

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
$("input[type=tel]").mask("+7(999)999-99-99");
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