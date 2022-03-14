//toda la logica respecto de la manupulacion de los datos debe ir aqui
const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage");

const productosSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minlength:[3,errorMessage.GENERAL.minlength]
        
    },
    sku:{
        type: String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
    },
    description:{
        type: String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
    },
    price:{
        type: Number,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        min:1
    },
    quantity:{
        type: Number,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        min:1
    }
})

productosSchema.virtual("price_currency").get(function(){
    return"$"+this.price
})
productosSchema.set("toJSON",{getters:true,setters:true,virtuals:true}) //modificadores de parametros a traves de funcion get o set
module.exports = mongoose.model("productos", productosSchema)