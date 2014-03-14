$(function(){
    "use strict";
    var $boxes = $('.box');
    var $width = $(document).width();
    console.log($width);


    //Jquery
    /*$boxes.animate({
        'height': '50px',
        'widht': '50px',
        'color': 'yellow',
        'background-color': 'red',
        'font-size': '18px',
        'left': '100%'
    });*/

    //CSS3
    $boxes.css({
        'widht': '50px',
        'height': '50px',
        'color' : 'yellow',
        'font-size': '18px',
        'background-color': 'blue',
        '-webkit-transform' : 'translateX(' + ($width -100) +'px)',
        '-webkit-transition-property': 'all',
        '-webkit-transition-duration': '3s'
    });
});