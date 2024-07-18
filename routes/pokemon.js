const express = require ('express');
const pokemon = express.Router();
const db = require ('../config/database');

pokemon.post("/", (req, res ,next) => {
    return res.status(200).send(req.body);
});

pokemon.get ("/", async (req, res, next) =>{

    const pok = await db.query ("SELECT * FROM pokemon");
    return res.status(200).json({code: 1, message: pok});
    
});



pokemon.get ('/:id([0-9]{1,3})', async (req, res, next) => {
    const id = req.params.id;
    if (id >= 0 && id <= 722){

        const pok = await db.query ("SELECT * FROM pokemon WHERE  pok_id = "+id+";");        
        return res.status(200).json({code: 1,  massage: pok}); 
    }
        return res.status(404).json ({code: 404, massage: "Pokémon no encontrado"});

    
     
}); 

pokemon.get ('/:name([A-Za-z]+)', async (req, res, next) => {
    
    // Operador Ternario
    // Condicion a evaluar ? valor si verdadero : valor si falso
    
    
    const name = req.params.name.toLowerCase();

    const pok =  await db.query ("SELECT * FROM pokemon WHERE pok_name = '"+name+"';");
  
    
    (pok.length > 0) ? res.status(200).json({code: 1, massage: pok}) :  res.status(404).json({code: 404, massage: "Pokémon no encontrado"}) ;
    
    
} );


module.exports = pokemon;
