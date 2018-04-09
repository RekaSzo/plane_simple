// mapOptions= variable defines the properties for the map
// center = specifies where to center the map (using latitude and longitude coordinates).
// zoom = zoom level for the map (try to experiment with the zoom level).
// myTypeID = property specifies the map type to display. The following map types are supported: ROADMAP, SATELLITE, HYBRID, and TERRAIN.
// creates a new map inside the <div> element with id="map", using the parameters that are passed (mapOptions).

// initMap function that initializes and adds the map when the web page loads. Use a script tag to include your own JavaScript which contains the initMap function.
// getElementById() function to find the map div on the web page.
// the code below constructs a new Google maps object, and adds properties to the map including the center and zoom level. See the documentation for other property options.
// new google.maps.Map() creates a new Google maps object
// zoom property specifies the zoom level for the map. Zoom: 0 is the lowest zoom, and displays the entire earth. Set the zoom value higher to zoom in to the earth at higher resolutions.

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
