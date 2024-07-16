const express = require ('express');
const pokemon = express.Router();
const  pk  = require ('../pokedex.json').pokemon; 

pokemon.post("/", (req, res ,next) => {
    return res.status(200).send(req.body);
});

pokemon.get ("/", (req, res, next) =>{
   
    return res.status(200).send(pk)
    
});



pokemon.get ('/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id -1;
    if (id >= 0 && id <= 150){        
        return res.status(200).send(pk[req.params.id - 1]); 
    }
        return res.status(404).send ("Pokémon no encontrado");

    
     
}); 

pokemon.get ('/:name([A-Za-z]+)', (req, res, next) => {
    
    // Operador Ternario
    // Condicion a evaluar ? valor si verdadero : valor si falso
    
    
    const name = req.params.name;
    const poke = pk.filter((p) => {
       return (p.name.toUpperCase() == name.toUpperCase()) && p ;    
    });
    
    (pk.length > 0) ? res.status(200).send(poke) :  res.status(404).send("Pokémon no encontrado") ;
    
    
} );


module.exports = pokemon;
