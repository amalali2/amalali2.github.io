// fade background color

/**$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 350) {
          $("body").css('background-color', '#2f52a0');
          $("body").css('color', '#fff');
          $("body").css('fill', '#fff');
          $(".logo").css('color', '#fff');
          $('button.site-menu-sidebar.js-open-menu span').css('background', '#fff');
      } else {
          $("body").css('background-color', '#edd2c8');
          $("body").css('color', '#2f52a0');
          $("body").css('fill', '#2f52a0');
          $(".logo").css('color', '#2f52a0');
          $('button.site-menu-sidebar.js-open-menu span').css('background', '#2655C7');
      }
  });
});**/

// nav

const init = () => {
  const openMenu = document.querySelector(`.js-open-menu`);
  const closeMenu = document.querySelector(`.site-menu-close`);

  const body = document.body;

  openMenu.addEventListener(`click`, () => {
    body.classList.add(`is-menu-open`);
  });
  closeMenu.addEventListener(`click`, () => {
    document.body.className = document.body.className.replace(`is-menu-open`, ``);
  });
};

init();

//

$( function(){

  var scrollTop = $(window).scrollTop();

  function lol( $this ) {
    var translate = (scrollTop - $($this).data('orig-offset')) / $(window).height() * 45;
    $($this).css({transform: 'translate3d(0,' + translate +'%'+', 0)'});
  }

  $('.parallax-text').each( function() {
    $(this).data('orig-offset', $(this).offset().top);
    lol( $(this) );
  });

  $(window).scroll( function() {
    scrollTop = $(window).scrollTop();

    $('.module-2').each( function() {
      lol( $(this) );
    });
  });

$(window).on('resize', function () {
  scrollTop = $(window).scrollTop();

  $('.module-2a ').each( function() {
    $(this).data('orig-offset', $(this).offset().top);
    lol( $(this) );
  });
});

});
