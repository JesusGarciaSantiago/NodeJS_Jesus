const express = require ('express');
const bodyparser  = require ("body-parser");
const app = express ();
const pokemon = require ('./routes/pokemon');
const bodyParser = require('body-parser');
const morgan = require ('morgan');


app.use (morgan('dev'));
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extende:true}));

/*
*Verbos HTTP
*GET - Obtener recursos
*POST - Almacenar/crear recursos
*PATCH - Modificar una parte de un recurso
*PUT - Modificar todo el recurso
*DELETE - Borrar un recurso
*/

app.get ("/", (req, res, next)=>{
    
   return res.status(200).send ("Bienvenido al Pokedex");

});

app.use("/pokemon", pokemon);

app.listen(process.env.PORT || 3000, () =>{
    return console.log ("Server is running...");
});