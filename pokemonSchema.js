const base = require("./mongo")
const mongoose=require("mongoose")

const pokemonSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    height:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    abilities: {
        type:String,
        required: true
    }
})


const pokemon = mongoose.model("pokemon",pokemonSchema )

module.exports=pokemon
