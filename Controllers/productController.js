//logic to resolve

//import product collection
const products = require('../model/productSchema')

//import wishlist collection
const wishlists = require('../model/wishlistSchema')


//get all products
exports.getallproducts = async (req, res)=>{
    //logic
    try{
//get all products from collection in mongodb
const allProducts = await products.find()
res.status(200).json(allProducts)//respone send back to the client
    }
    catch(err){
        res.status(401).json(err)
    }
}

//vie particular product details

exports.viewProduct = async (req, res)=>{
    //logic
    //get particuar product id
    const id = req.params.id//2
    //get details of particular product
    try{
        const product = await products.findOne({id})
        if(product){
            res.status(200).json(product)//product send back to the client 
        }
        else{
            res.status(401).json("Product not Found")//errorsending back to the client
        }
    }
    catch{
        res.status(401).json(err)//error sending back 
    }
}


