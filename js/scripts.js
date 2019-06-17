if ($(window).width() >= 1200) {
    $(window).scroll(function (){
        var header = $(".page-header").height();
        var scroll = $(window).scrollTop();
        if(scroll > header) {
            $('.page-header').css('background', 'black');
            $('.navigation').css('transform', 'translateX(-40px)');
            $('.primary-cta').css('display', 'block');
        } else {
            $('.page-header').css('background', 'none');
            $('.navigation').css('transform', 'translateX(-100%)');
            $('.primary-cta').css('display', 'none');
        }
    });
}