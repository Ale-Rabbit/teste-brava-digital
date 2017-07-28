/*  Java Script */
 
$(function(){

/* ========================================================================= 
/*  Home Slide
/* ========================================================================= */

    

    // Slider Height
    var slideHeight = $(window).height();
    $('#home-carousel .item, #home-carousel .video-container').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-carousel .item, #home-carousel .video-container').css('height',slideHeight);
    });

});

jQuery(document).ready(function($) {
 
        $('#home-carousel').carousel({
            interval: 5000
        });
 
    
 
});

/* ---------------------------------------------------------------------- */
/*      Galeria de imagens
/* ---------------------------------------------------------------------- */


//Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click( function(){
                var id_selector = $(this).attr("id");
                var id = id_selector.substr(id_selector.length -1);
                var id = parseInt(id);
                $('#myCarousel').carousel(id);
        });
