$('.tabs li').click(function (){
    var tab_id = $(this).attr('data-tab');
    
    $('.tabs li').removeClass('tab-current');
    $('.tab-content').removeClass('tab-current');

    $(this).addClass('tab-current');
    $("#"+tab_id).addClass('tab-current');
});