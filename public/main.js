// buena practica comprobar que el navegador permite la geolocalizacion

if("geolocation" in navigator) {

} else {
    alert('La geolocalizacion no existe en su ordenador');
}

// getCurrentPosition() te da la posicion

if("geolocation" in navigator) {
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    //console.log("Localizacion" + position.coords.latitude, position.coords.longitude);
    //geolocalizacion en bonito
}, function (err) {
    console.log(err);
},{
    maximunAge: Infinity, //milisegundos tambien se puede poner tiempo infinito desde la ultima vez que tiene en cache
    timeout: 10000, //milisegundos tiempo de espera para encontrar la geolocalizacion
    enableHighAccuracy: true // alta precision
});
} else {
    alert('La geolocalizacion no existe en su ordenador');
}

//geolocalizacion si se esta moviendo
var watchID = navigator.geolocation.watchPosition(function(position) {

})
console.log(watchID);
