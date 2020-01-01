// fade background color

$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 350) {
          $("body").css('background-color', '#2655C7');
          $("body").css('color', '#fff');
          $("body").css('fill', '#fff');
          $(".logo").css('color', '#fff');
          $('button.site-menu-sidebar.js-open-menu span').css('background', '#fff');
      } else {
          $("body").css('background-color', '#FFD2CC');
          $("body").css('color', '#2655C7');
          $("body").css('fill', '#2655C7');
          $(".logo").css('color', '#2655C7');
          $('button.site-menu-sidebar.js-open-menu span').css('background', '#2655C7');
      }
  });
});

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
