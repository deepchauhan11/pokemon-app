const express = require("express")
const Pokemon = require("./pokemonSchema")
const User = require("./userSchema")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/",cors(),(req,res)=>{

})

app.post("/login",async(req,res)=>{
  const{email,password}=req.body

  try{
      const data=await User.findOne({email:email, password:password}).exec()
      if(data){
          res.json(data)
      }
      else{
          res.json("invalid")
      }

  }
  catch(e){
      res.json("fail")
  }

})


app.get('/pokemon/:pokemon_id', async (req, res) => {
    try {
      const pokemon = await Pokemon.findById(req.params.pokemon_id);
  
      if (!pokemon) {
        return res.status(404).json("Pokemon not found");
      }
  
      res.json(pokemon);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });

app.get("/pokemons",async(req,res)=>{
    try{
        const pokemons=await Pokemon.find({})
        res.json(pokemons)
    }
    catch(e){
        res.json("error while fetching pokemons list")
    }
})

// add new pokemon
app.post('/pokemon', async (req, res) => {
    const { name, type, description, height, weight, abilities } = req.body;

    const data={
      name:name,
      type:type,
      description:description,
      height:height,
      weight:weight,
      abilities:abilities
  }

  try{
          await Pokemon.insertMany([data])
          res.json("pokemon added successfully")
  }
  catch(e){
      res.json("error while adding the pokemon")
  }

});




app.listen(8001,()=>{
    console.log("port connected");
})