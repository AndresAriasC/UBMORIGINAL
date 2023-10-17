
// Datos de la respuesta JSON
const jsonResponse = {
  request: {
    origin: { lat: 930956086326066, lng: -85.97361618162779 },
    destination: { lat: 12.114969844299756, lng: -86.23728803671736 }, // Cambia la ubicación de destino
    travelMode: 'DRIVING',
    waypoints: [
      {
        location: { lat: 12.14, lng: -86.25 },
        stopover: true,
      },
    ],
  },
};


function initMap() {
  // Crear el mapa con el centro en el origen
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 12.136389, lng: -86.251389 }, // Coordenadas de Managua
  });
  // Crear el servicio de rutas
  directionsService = new google.maps.DirectionsService();
  // Crear el renderizador de rutas
  directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    suppressMarkers: true, // Ocultar los marcadores por defecto
  });
  // Crear el marcador del móvil
  marker = new google.maps.Marker({
    map: map,
    position: { lat: 12.136389, lng: -86.251389 }, // Coordenadas iniciales del móvil
    icon: "https://maps.google.com/mapfiles/kml/shapes/car.png", // Icono personalizado
  });

  // Calcular y mostrar la ruta inicial
  calculateAndDisplayRoute();
}

function calculateAndDisplayRoute() {
  const origin = jsonResponse.request.origin;
  const destination = jsonResponse.request.destination;
  const travelMode = jsonResponse.request.travelMode;
  const waypoints = jsonResponse.request.waypoints;

  directionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: travelMode,
      waypoints: waypoints,
    },
    function (response, status) {
      if (status === "OK") {
        // Mostrar la ruta en el mapa
        directionsRenderer.setDirections(response);
      } else {
        window.alert("No se pudo calcular la ruta: " + status);
      }
    }
  );
}
