const express = require ('express');
const app = express ();
const { pokemon } = require ('./pokedex.json'); 

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

app.get ("/pokemon", (req, res, next) =>{
   
    return res.status(200).send(pokemon)
    
});



app.get ('/pokemon/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id -1;
    if (id >= 0 && id <= 150){        
        return res.status(200).send(pokemon[req.params.id - 1]); 
    }
        return res.status(404).send ("Pokémon no encontrado");

    
     
}); 

app.get ('/pokemon/:name([A-Za-z]+)', (req, res, next) => {
    
    // Operador Ternario
    // Condicion a evaluar ? valor si verdadero : valor si falso
    
    
    const name = req.params.name;
    const pk = pokemon.filter((p) => {
       return (p.name.toUpperCase() == name.toUpperCase()) ? p : null;    
    });
    
    (pk.length > 0) ? res.status(200).send(pk) :  res.status(404).send("Pokémon no encontrado") ;
    
    
} );

app.listen(process.env.PORT || 3000, () =>{
    return console.log ("Server is running...");
});