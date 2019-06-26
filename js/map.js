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