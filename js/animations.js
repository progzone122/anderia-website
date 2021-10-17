/* Button 1 */
$('#b1').hover(function(){
    $('#b1, #b1 h4').stop();
    $('#b1').animate({backgroundColor: 'white'}, 100);
    $('#b1 h4').animate({color: 'black'}, 100);
});
$('#b1').mouseleave(function(){
    $('#b1, #b1 h4').stop();
    $('#b1').animate({backgroundColor: 'transparent'}, 100);
    $('#b1 h4').animate({color: 'white'}, 100);
});
/* Scroll */
$(window).scroll(function(){
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    /* Arrow 1 */
    if(scrollPercent >= 3){
        $('#arr1').stop();
        $('#arr1').animate({"margin-top": '170px'}, 200);
    }else{
        $('#arr1').stop();
        $('#arr1').animate({"margin-top": '0'}, 200);
    }
    /* Scroll news blocks */
    if(scrollPercent >= 35){
        $('#nw1, #nw2, #nw3, #nw4').stop();
        $('#nw1, #nw2, #nw3, #nw4').animate({"opacity": '1'}, 200);
    }else{
        $('#nw1, #nw2, #nw3, #nw4').stop();
        $('#nw1, #nw2, #nw3, #nw4').animate({"opacity": '0'}, 400);
    }
    /* Scroll see more button */
    if(scrollPercent >= 80){
        $('.button-more').stop();
        $('.button-more').animate({
            height: ('70%'),
            opacity: 1
        }, 100);
    }else{
        $('.button-more').stop();
        $('.button-more').animate({
            height: ('0%'),
            opacity: 0
        }, 100);
    }
});
/* Scale news blocks */
$('#nw1, #nw2, #nw3, #nw4').hover(function(){
    $(this).animate({
        opacity: 0.8
    }, 100);
});
$('#nw1, #nw2, #nw3, #nw4').mouseleave(function(){
    $(this).animate({
        opacity: 1
    }, 100);
});
/* More button */
$('.button-more').hover(function(){
    $('.button-more').stop();
    $('.button-more').animate({backgroundColor: 'transparent'}, 100);
    $('.button-more h4').animate({color: 'rgb(8, 144, 185)'}, 100);
});
$('.button-more').mouseleave(function(){
    $('.button-more').stop();
    $('.button-more').animate({backgroundColor: 'rgb(8, 144, 185)'}, 100);
    $('.button-more h4').animate({color: 'white'}, 100);
});
/* Home button */
$('.home').hover(function(){
    $('.home').stop();
    $('.arrow2').css({"background-image":"url('img/arrow2-2.png')"});
    $('.home h2').animate({color: 'rgb(8, 144, 185)'}, 100);
});
$('.home').mouseleave(function(){
    $('.home').stop();
    $('.arrow2').css({"background-image":"url('img/arrow2.png')"});
    $('.home h2').animate({color: 'black'}, 100);
});
/* Download game button  */
$('#bd1').hover(function(){
    $('#bd1, #bd1 h4').stop();
    $('#bd1').animate({backgroundColor: 'rgb(8, 144, 185)'}, 100);
    $('#bd1 h4').animate({color: 'white'}, 100);
});
$('#bd1').mouseleave(function(){
    $('#bd1, #bd1 h4').stop();
    $('#bd1').css({backgroundColor: "transparent"}, 180);
    $('#bd1 h4').animate({color: 'black'}, 180);
});
$('#bd2').hover(function(){
    $('#bd2, #bd2 h4').stop();
    $('#bd2').animate({backgroundColor: 'rgb(8, 144, 185)'}, 100);
    $('#bd2 h4').animate({color: 'white'}, 100);
});
$('#bd2').mouseleave(function(){
    $('#bd2, #bd2 h4').stop();
    $('#bd2').css({backgroundColor: "transparent"}, 180);
    $('#bd2 h4').animate({color: 'black'}, 180);
});