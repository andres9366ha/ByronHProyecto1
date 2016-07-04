function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(9.92807,-84.09072),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   var map = new google.maps.Map(document.getElementById("map-canvas"),
 mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
