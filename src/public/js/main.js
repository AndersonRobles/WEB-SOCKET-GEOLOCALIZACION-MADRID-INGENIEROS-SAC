/*util para utilizar leaflet*/ 
/* recibe 2 coordenas latitud y longitud y el zoom*/
/* -12.112974001815218, -76.99338309224643 Madrid ingenieros /*
/*-11.8266047,-77.1302725*/ 
const map = L.map('map-template').setView([-12.112974001815218, -76.99338309224643],11);

const socket = io();

/*https://wiki.openstreetmap.org/wiki/Tiles*/
const tileURL = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';
const tileURL2 = 'http://tile.thunderforest.com/cycle/{z}/{x}/{y}.png';
const tileURL3 = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';		


/*para añadir la plnatilla del mapa a nuestra mvariable map*/
L.tileLayer(tileURL3).addTo(map);

/*Nuestra localizacion sea mas precisa */
map.locate({enableHighAccuracy: true });
/* localizacion encontrada a la hora de dar autoralizacion ,se ve los datos , e*/
map.on('locationfound' , e => {
    const coords= [e.latlng.lat,e.latlng.lng];
    const marker = L.marker(coords);
    marker.bindPopup('Tu estas Aquí!!');
   map.addLayer(marker);
//emitir un evento atravez del socket de arriba recibir lat y long
socket.emit('userCoordinates', e.latlng);

});

//nuevo usuario se conecte ,el administrador vea
socket.on('newUserCoordinates',  (coords) => {
    console.log('a new user is connected');
    const marker =L.marker([coords.lat+1,coords.lng+1]);
    marker.bindPopup('!helle There! ');
    
    map.addLayer(marker);
});

const marker =L.marker([-12.1130874,-76.9935109,20]);
marker.bindPopup('<center><b>Madrid Ingenieros - Ofinica Principal </b><br>Jiron Tirajones Nº181,Provincia de Lima 15038 <img src="ing/Madrid.png"   width="400" height="200"></center>');

map.addLayer(marker);




/* o marker.addTo(map); */
const marker2 =L.marker([-12.0150788,-76.8804348,17]);
marker2.bindPopup(' <center><b>Madrid Ingenieros - Sol de Santa Clara</b><br>Av. Simón Bolivar 450 -Ate<img src="ing/parquecentral.jpg" width="500" height="300"></center>');
map.addLayer(marker2);

const marker3 =L.marker([-12.0903688,-76.9884537,17]);
r=marker3.bindPopup(' <center><b>Madrid Ingenieros - Madrid Live </b> <br>Av. Boulevard de Surco 360-San Borja<img src="ing/live.jpg" width="500" height="300"></center>');

map.addLayer(marker3);


const marker4 =L.marker([-12.1075562,-76.9961146,21]);
marker4.bindPopup(' <center><b>Madrid Ingenieros - Madrid Prana </b> <br>Bernstein 175 San Borja-San Borja<img src="ing/prana.jpg" width="400" height="300"></center>');

map.addLayer(marker4);

const marker5 =L.marker([-12.089063,-77.02608,16]);
marker5.bindPopup(' <center><b>Madrid Ingenieros - Madrid Time </b> <br>Av. Rivera Navarrete 2650, Lince 15046<img src="ing/time.jpg" width="650" height="300"></center>');

map.addLayer(marker5);

const marker6 =L.marker([-12.1027378, -76.994381,17]);
marker6.bindPopup(' <center><b>Madrid Ingenieros -Madrid Friendly </b> <br>Jr.Romero Hidalgo 101 <img src="ing/friendly.jpg" width=550" height="300"></center>');
map.addLayer(marker6 );

