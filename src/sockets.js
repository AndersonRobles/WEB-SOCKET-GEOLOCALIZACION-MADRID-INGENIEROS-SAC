module.exports = io => {
    io.on('connection' , (socket) => {
console.log('New User connected');


//escucha esas coordenas y muestralo por consola

socket.on('userCoordinates',coords => {
    //aca se podria almacenar en bdatos las coordenadas de clientes conectados
    //console.log(coords);
 

    //transmitirle un mensaje a todos los clientes neustras ubicaciones
 socket.broadcast.emit('newUserCoordinates', coords);
});
    });
}