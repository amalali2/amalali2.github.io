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

//

/*******Filtering*******/

// init Isotope
var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',
    //layoutMode: 'fitRows',
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {

    },
  };

  // bind filter button click
  $('#filter-btn').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });