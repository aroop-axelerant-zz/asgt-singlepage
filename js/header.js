// Header animations on scroll in desktop
$(window).scroll(function (){
    var header = $(".page-header").height();
    var scroll = $(window).scrollTop();
    if(scroll > header) {
        $('.page-header').css('background', 'black');
        if ($(window).width() >= 1200) {
            $('.navigation').css('transform', 'translateX(0)');
            $('.page-header .primary-cta').css('display', 'block');
        }
    } else {
        $('.page-header').css('background', 'none');
        if ($(window).width() >= 1200) {
            $('.navigation').css('transform', 'translateX(-120%)');
            $('.page-header .primary-cta').css('display', 'none');
        }
        if ($(window).width() >= 1600) {
            $('.navigation').css('transform', 'translateX(-165%)');
            $('.page-header .primary-cta').css('display', 'none');
        }
    }
});

// Menu Toggle on click
$('.page-header .ico-menu').click(function (){
    $('.page-header .navigation').slideToggle();
    $('.page-header').toggleClass("bg-black");
});