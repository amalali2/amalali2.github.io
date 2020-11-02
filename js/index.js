// Modal functions
$(document).ready(function(){
   
    $("#scrolling li p a").on("click", function() {
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
        $("body").removeClass('modal-is-showing');
        $("body").addClass('modal-is-closed');
        setTimeout(hideModal, 1000)
        $('.item').removeClass('show');
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

    var carousel;
    $(document).ready(function () {
        carousel = $("ul");
        carousel.itemslide();
    });

});