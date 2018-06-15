// buena practica comprobar que el navegador permite la geolocalizacion

if("geolocation" in navigator) {

} else {
    alert('La geolocalizacion no existe en su ordenador');
}