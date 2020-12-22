// modal functions

  $(document).ready(function(){
   
    $(".img-wrap").on("click", function() {
        if ($(this).attr("id")) {
        $("body").removeClass('modal-is-closed');
        $("body").addClass('modal-is-showing');
        $('.modal').css('opacity','1');
        $(".modal").show();


        var itemId = $(this).attr("id");
        var showItem = $('.item').attr("id")==itemId
        
        $('.project-content').find('[id="'+itemId+'"]').addClass('show');
        }
        
    });
    
    $(".back-btn").on("click", function() {
        $(".modal").animate({ scrollTop: $('.modal').prop("scrollHeight")}, 1000);
    });

    var elem = $('.modal');

    elem.scroll(function(e) {
        if (elem[0].scrollHeight - elem.scrollTop() <= elem.outerHeight()) {
            $('.modal').css('opacity','0');
            $('.modal').scrollTop(0);
            $(".modal").hide();
            $('.item').removeClass('show');
        }
    });

    function hideModal() {     
        $(".modal").delay(1000).hide();
    }

});

// loading

$(document).ready(function() {
        
    var counter = 0;
    var c = 0;
    var i = setInterval(function() {
      
      $(".loading-page .counter h1").html(c + '%');
  
      
      counter++;
      c++;
      if(counter == 101) {
        clearInterval(i);
        $(".loading-page").animate({opacity: 0}, 1000);
        setTimeout(function(){ 
            $(".loading-page").hide();
        }, 1001);
      }
    }, 50);
  });


// img reveal
setTimeout(function(){ 
anime({
  targets: '.outer',
  translateY: '-100%',
  direction: 'reverse',
  duration: 3000,
  easing: 'easeInOutCubic',
})

anime({
  targets: '.inner',
  translateY: '100%',
  direction: 'reverse',
  duration: 3000,
  easing: 'easeInOutCubic',
})

anime({
  targets: '.image',
  scale: 2,
  easing: 'easeInOutQuad',
  direction: 'reverse',
  duration: 3500,
})
}, 5000);



/**const body = document.body,
      jsScroll = document.getElementsByClassName('js-scroll')[0],
      height = jsScroll.getBoundingClientRect().height - 1,
      speed = 0.05

var offset = 0

body.style.height = Math.floor(height) + "px"

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed
    
    var scroll = "translateY(-" + offset + "px) translateZ(0)"
    jsScroll.style.transform = scroll
    
    raf = requestAnimationFrame(smoothScroll)
}
smoothScroll()**/

