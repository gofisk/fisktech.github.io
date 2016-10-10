function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var URLParam = getQueryVariable("b");

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

var myLocation = null;
var canToggle = false; //just here for the button click

var destination = places[URLParam];

var commLocation = new google.maps.LatLng(destination);

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();

  var mapOptions = {
    zoom: 11,
    center: commLocation,
    disableDefaultUI: false
  };
  
 

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  
  //This takes a bit longer to load...
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      myLocation = geolocate;

      map.setCenter(geolocate);

      calcRoute();
      $('#js-map-pop').addClass('js-show-map');
      canToggle = true;
    });
  }

  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));
}

function calcRoute() {
  var start = myLocation;
  var end = commLocation;

  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.WALKING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

//google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
  $('#js-get-directions').click(function() {
    $('#js-map-pop').addClass('js-pop-up');
    initialize();
    $(this).unbind().css('display', 'none');
  });

  $('#js-show-directions').click(function() {
    if (canToggle) {
      $('#directions-panel').toggleClass('js-show');
    }
  });
});

