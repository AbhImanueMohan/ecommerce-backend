// To define rotes for the client request

// Import expres
const express = require('express');

//import productController
const productController = require('../Controllers/productController')

// import wishlist

const wishlistController =  require('../Controllers/wishlistController')
// add to cart
const cartController =   require('../Controllers/cartController')

//using express create an object for router class inorder to setup path
const router = new express.Router();




//resolve various client request 

//api call

//1 get all products
router.get('/products/allProducts',productController.getallproducts)

//2 view particular product details 

router.get('/products/viewProduct/:id',productController.viewProduct)

//3 add to  wishlist
router.post('/products/addtowishlist',wishlistController.addtowishlist)

//get product from wishlist

router.get('/products/wishlist',wishlistController.getwishlist)

//delete from wishlist
router.delete('/products/deletewishlist/:id',wishlistController.deletewishlist)

//add to cart
router.post('/products/addtocart',cartController.addtocart)

router.get('/products/cart',cartController.getcart)


//delete
router.delete('/products/deletecart/:id',cartController.deletecart)

//increment cart count
router.get('/products/increment/:id',cartController.incrementCartItems)

//increment cart count
router.get('/products/decrement/:id',cartController.decrementCartItems)
//export router
module.exports = router

