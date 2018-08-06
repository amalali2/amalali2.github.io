// everytime we hover a link, run a function

//inside of our function, we want to find out which overylay we want to show

// remove .visible from all of the overlays

//we add the .visible class onto 

$('.navigation-link a').hover(function() {

    // this refers to the current link we've just hovered
    var link = $(this)

    // here we grab the data-overlay attribute (which refers to the class we want to show)
    var overlay = link.data('overlay')

    // first we hide all of the overlay by removing the 'visible class
    $('.overlay.bg').removeClass('visible')

    // lastly we add the visible class 
    $(overlay).addClass('visible')
});