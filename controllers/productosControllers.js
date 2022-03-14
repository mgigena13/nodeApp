const productosModel = require("../models/productosModel");

module.exports={
    getAll: async function(req, res, next) {
        try{
            const productos = await productosModel.find()
            res.json(productos);
        }catch(e){
            next(e)
        }
    },


    getById: async function(req, res, next) {
        try{
            const productos = await productosModel.findById(req.params.id)
            res.json(productos)
        }catch(e){
            next(e)
        }
    },

    create: async function(req, res, next) {
        //insertar en base de datos
        try{
            console.log(req.body) //recibe lo enviado en el body del request
            const producto = new productosModel({
                name:req.body.name,
                sku:req.body.sku,
                description:req.body.description,
                price:req.body.price,
                quantity:req.body.quantity
            })
            const documento = await producto.save()
            res.json(documento)
        }catch(e){
                console.log(e)
                next(e)

        }
    },

    uptade: async function(req, res, next) {
        try{
            const producto = await productosModel.updateOne({_id:req.params.id}, req.body)
            res.json(producto)
        }catch(e){
            next(e)
        }
        
    },

    delete: async function(req, res, next) {
        //borrar en base de datos
        try{
            const producto = await productosModel.deleteOne({_id:req.params.id})
            res.json(producto)
        }catch(e){
            next(e)
        }
    }
}