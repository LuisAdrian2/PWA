function iniciarMap() {
  // Inicializar el mapa con una ubicación predeterminada
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  19.195741384300437, lng:-96.19319041715633}, 
    zoom: 15
  });
 

  // Crear un marcador en la ubicación predeterminada
  var marker = new google.maps.Marker({
    position: {lat: 19.195741384300437, lng: -96.19319041715633}, 
    map: map,
    title: 'Ubicación de la empresa'
    
  });

   

  // Función para obtener la ubicación actual del usuario
  window.getLocation = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de latitud y longitud
        var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        // Centrar el mapa en la ubicación del usuario
        map.setCenter(userLatLng);

        // Mover el marcador a la ubicación del usuario
        marker.setPosition(userLatLng);

        // Actualizar el título del marcador
        marker.setTitle('Tu Ubicación Actual');


        var otherLocationMarker = new google.maps.Marker({
          position: {lat: 19.195741384300437, lng:  -96.19319041715633},  // Cambia estas coordenadas según tu ubicación deseada
          map: map,
          title: 'Ubicación de la empresa',
      });
        
      }, function(error) {
        console.error('Error al obtener la ubicación:', error.message);
      },{ enableHighAccuracy: true });
    } else {
      console.error('Tu navegador no soporta geolocalización');
    }
  }

  // Llamar a la función para obtener la ubicación al cargar el mapa
  window.getLocation();
}