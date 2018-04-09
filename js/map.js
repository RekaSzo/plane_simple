// mapOptions= variable defines the properties for the map
// center = specifies where to center the map (using latitude and longitude coordinates).
// zoom = zoom level for the map (try to experiment with the zoom level).
// myTypeID = property specifies the map type to display. The following map types are supported: ROADMAP, SATELLITE, HYBRID, and TERRAIN.
// creates a new map inside the <div> element with id="map", using the parameters that are passed (mapOptions).


function initMap() {
  var uluru = {lat: 47.481561, lng: 19.064652};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
