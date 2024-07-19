const express = require ('express');
const app = express ();
const pokemon = require ('./routes/pokemon');
const morgan = require ('morgan');
const user = require ('./routes/user');

app.use (morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


/*
*Verbos HTTP
*GET - Obtener recursos
*POST - Almacenar/crear recursos
*PATCH - Modificar una parte de un recurso
*PUT - Modificar todo el recurso
*DELETE - Borrar un recurso
*/

app.get ("/", (req, res, next)=>{
    
   return res.status(201).json ({code: 201, massage: "Bienvenido al Pokedex"});

});

app.use("/pokemon", pokemon);
app.use("/user", user);

app.use((req, res, next) =>{
    return res.status(404).json({code:  404, massage: "URL no encontrada"});

});

app.listen(process.env.PORT || 3000, () =>{
    return console.log ("Server is running...");
});