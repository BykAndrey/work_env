
/*tabs*/
(function ($) {
    $.fn.my_tab = function () {
        var removeActive=function(){
            $(this).removeClass('active');
        };
        var make=function(){
            var Tab = $(this);
            $(this).find('.tab-content').each(function(){
                $(this).css('opacity','0');             
            });
            $(this).find('.tab>a').eq(0).parent().addClass('active');
            $(this).find('.tab-content').eq(0).addClass('active');
            $(this).find('.tab-content').eq(0).css('opacity',1);
 
            $(this).find('.tab>a').click(function (event) {
                event.preventDefault();
                if(!$(this).hasClass('active')){
                    var name = $(this).attr('href');
                    document.location.hash=name;
                    $(Tab).find('.tab').each(removeActive);
                    $(Tab).find('.tab-content.active').animate({'opacity':0},300);
                    $(this).parent().addClass('active');
                    setTimeout(function(){
                        $(Tab).find(name).animate({'opacity':1},300);
                        $(Tab).find('.tab-content').each(removeActive);
                        $(Tab).find(name).addClass('active');
                    },300);
                }
            });
        };
        return this.each(make);
    };
}(jQuery));


$(document).ready(function(){


    /*slide on the main page*/
   /* $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        dotsClass:'slider-dots'
      });
*/
    
  /*  $('.dely-tab').my_tab();

*/

  /*  $('.call_form--toggle').on('click',function(){
    
    });*/
   /* $('.popup_form').magnificPopup();*/

 /*   $('.gallery').magnificPopup({
      type: 'image',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      }
    });*/

});

