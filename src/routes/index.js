//no usare express para crear servidor
//lo usare para crear rutas ,nos va a permitir realizar diferentes rutas.ROUTER
const router = require ('express').Router();



//rutas
router.get('/' ,(req,res) =>{
    //no es necesario .ejs porque ya le dijimos
    //todo relacionado .ejs lo ejecute
    res.render('index');

    

});

//utilizaremso una unica ruta , para exportar este modulo
//usar en el archivo principal
module.exports =router ;
