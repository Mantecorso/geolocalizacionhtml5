// buena practica comprobar que el navegador permite la geolocalizacion

if("geolocation" in navigator) {

} else {
    alert('La geolocalizacion no existe en su ordenador');
}

// getCurrentPosition() te da la posicion

if("geolocation" in navigator) {
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
});
} else {
    alert('La geolocalizacion no existe en su ordenador');
}