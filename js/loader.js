$(document).ready(function(){
    var count = 0;
    var counting = setInterval(function(){
        if(count < 101) {
            $('#count').text(count);
            count++
        } else {
            clearInterval(counting)
        }

        if (parseInt($('#count').text()) === 100) {  
            $('.loading').animate({
                "opacity": "0",
                "z-index": "0"
            }, 800);

            $('.hero wrapper').animate({
                "opacity": "1",
            }, 1000);
        }
    }, 50);
});