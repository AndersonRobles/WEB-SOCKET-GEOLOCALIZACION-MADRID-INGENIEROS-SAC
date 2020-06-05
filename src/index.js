const express = require ('express');
const engine = require ('ejs-mate');
const path = require ('path');
const socketIO = require('socket.io');
const http = require('http');
//inicializaciones 
const app = express();
const server = http.createServer(app);

const io = socketIO(server);
//ese servidor inicializara toda mi app

//inicializacion de websocket
//io me permitira conectarme con el cliente

//motor de plantilla ejs-mate
//engine para usar el motor de plantilla ejs

app.engine('ejs',engine);
//para ejecutar el motor de plantilla ,
//establecer motor de plantilla ejs

app.set('view engine','ejs'); 


//metodo join ,unir directorios 
//servidor =setting


//dirname tiene un texto con la ruta 
//donde se esta ejecutando el archivo index

//al unirlo ,quedaria asi C:\Users\user\Desktop\leaft\src/views y se entra al index.ejs
app.set('views',path.join(__dirname , 'views' ));






//de routes su index jalarlo al principal

app.use(require ('./routes/'));

//sockets para usar el sockets.js y la funcion io

require('./sockets')(io);

//static files,para decirle a express que siempre acesa al folder public y todos archivos adentro
app.use(express.static(path.join(__dirname ,'public')));


//empieza el servidor
server.listen(8000, () => {
    console.log ('Server on port', 8000);
});