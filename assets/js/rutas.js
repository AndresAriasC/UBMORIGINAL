var directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    suppressMarkers: true, // Ocultar los marcadores por defecto
  });
  
  var routeJSON = directionsRenderer.save();