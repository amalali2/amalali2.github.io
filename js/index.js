// fade background color

/*$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 350) {
          $("body").css('background-color', '#F3E0D7');
          $("body").css('color', '#C96755');
          $("hr").css('border-color', '#C96755');
          $("body").css('fill', '#C96755');
          $(".logo").css('color', '#C96755');
      } else {
          $("body").css('background-color', '#C96755');
          $("body").css('color', '#fff');
          $("hr").css('border-color', '#fff');
          $("body").css('fill', '#fff');
          $(".logo").css('color', '#fff');
      }
  });
});*/

//

/***** Loader ******/



/*******Filtering*******/

// init Isotope
$(document).ready(function(){
  $('.portfolio-item').isotope(function(){
      itemSelector:'.item'
    });



  $('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');


    var selector = $(this).attr('data-filter');
      $('.portfolio-item').isotope({
        filter: selector
      })
      return false;
  });
});

var $grid = $('.grid').isotope({
  // options
  itemSelector: '.element-item',
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.button-group button').click(function(){
  $('.button-group button').removeClass('active');
  $(this).addClass('active');

});