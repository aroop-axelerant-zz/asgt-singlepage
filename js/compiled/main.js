// Header animations on scroll in desktop
$(window).scroll(function (){
    var header = $(".page-header").height();
    var scroll = $(window).scrollTop();
    if(scroll > header) {
        $('.page-header').css('background', 'black');
        if ($(window).width() >= 1200) {
            $('.navigation').css('transform', 'translateX(0)');
            $('.primary-cta').css('display', 'block');
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
function initMap() {
    // Styles a map in night mode.
    var location = {lat: 40.674, lng: -73.945};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 12,
      gestureHandling: 'none',
      zoomControl: false,
      disableDefaultUI: true,
      styles: [ { 
        "featureType": "water", 
        "stylers": [ { 
          "color": "#757575" } 
          ] 
        },{ 
        "featureType": "landscape", 
        "elementType": "geometry", 
        "stylers": [ { 
          "color": "#626262" } 
         ] 
        },{ 
        "featureType": "administrative", 
        "elementType": "labels.text.fill", 
        "stylers": [ { 
          "color": "#424242" } 
          ] 
        },{ 
        "featureType": "administrative", 
        "elementType": "labels.text.stroke", 
        "stylers": [ { 
          "visibility": "off" } 
          ] 
        },{ 
        "featureType": "road", 
        "elementType": "geometry", 
        "stylers": [ { 
          "color": "#828282" }, {
          "visibility": "on" } 
          ] 
        },{ 
        "featureType": "poi", 
        "elementType": "geometry.fill", 
        "stylers": [ { 
          "color": "#626262" }, { 
          "visibility": "simplified" } 
          ] 
        },{ 
        "featureType": "administrative.province", 
        "stylers": [ { 
          "visibility": "off" } 
          ] 
        },{ 
        "featureType": "road", 
        "elementType": "geometry.stroke", 
        "stylers": [ { 
          "color": "#828282" }, { 
          "weight": 2 }, { 
          "visibility": "off" } 
          ] 
        },{ 
        "featureType": "administrative.locality", 
        "stylers": [ { "visibility": "on" } 
          ] 
        },{ 
        "featureType": "road", 
        "elementType": "labels", 
        "stylers": [ { 
          "visibility": "on" } 
          ] 
        },{ 
        "featureType": "poi", 
        "stylers": [ { 
          "visibility": "off" } 
          ] 
        },{ 
        "featureType": "transit", 
        "stylers": [ { 
          "visibility": "off" } 
          ] 
        },{ 
        "featureType": "administrative.neighborhood", 
        "stylers": [ { 
          "visibility": "on" } 
          ] 
        } 
      ]
    });
}
/* Variables */
var parentWidth = $('.slides-wrapper').parent().width();
var slideCount = $('.slide').length;
var counter = 0;


/* Set width */
$('.slides-wrapper').width(parentWidth);
$('.slide').width(parentWidth);
$('.slides').width(parentWidth * slideCount);


/* Set Height */
var slideHeight = $('.slide-content').height();

$('.slides-wrapper').height(slideHeight + 60);
$('.slide').height(slideHeight);
$('.slides').height(slideHeight);


/* Slide Control */
$('.next').click(function (){
	if(counter < (slideCount-1)) {
  	counter = counter + 1;
    $('.slides').css('transform', 'translateX(-'+(parentWidth*counter)+'px)');
  }
});
$('.prev').click(function (){
	if(counter > 0) {
  	var slideOffset = parentWidth - (parentWidth*counter);
  	$('.slides').css('transform', 'translateX('+slideOffset+'px)');
  	counter = counter - 1;
  }
});


/* Set slide counter dynamically */
var totalCount = numberFormatter(slideCount);
$('.total-slides').text(totalCount);

$('.slide').each(function (){
    var index = $(this).index();
    index = index + 1;

    var currentNumber = numberFormatter(index);
    $(this).children().find('.current-slide').text(currentNumber);
});

function numberFormatter (e) {
	var formattedNumber = ("0" + e).slice(-2);
  return formattedNumber;
}
$('.tabs li').click(function (){
    var tab_id = $(this).attr('data-tab');
    
    $('.tabs li').removeClass('tab-current');
    $('.tab-content').removeClass('tab-current');

    $(this).addClass('tab-current');
    $("#"+tab_id).addClass('tab-current');
});