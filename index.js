//Dependencies
const express = require ('express');
const app = express ();
const morgan = require ('morgan');

//Routes
const pokemon = require ('./routes/pokemon');
const user = require ('./routes/user');

//MiddleWare
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index =  require ('./middleware/index');
const cors = require('./middleware/cors');



app.use(cors);
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

app.get ("/", index);
app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon);
app.use(notFound);

app.listen(process.env.PORT || 3000, () =>{
    return console.log ("Server is running...");
});