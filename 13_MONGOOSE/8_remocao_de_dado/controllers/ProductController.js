const Product = require('../models/Product')

module.exports = class ToughController {
  static async showProducts(req, res) {

    const products = await Product.find().lean()

    res.render('products/all', {products})
  }

  static createProduct(req, res) {
    res.render('products/create')
  }

  static async createProductPost(req, res) {
    const name = req.body.name
    let image = req.body.image
    const price = req.body.price
    const description = req.body.description

    try {
      
      const product = new Product({name,image, price, description})
  
      await product.save()
  
      res.redirect('/products')
    } catch (error) {
      console.log(error)
    }
  }

  static async getProduct(req, res) {
    let id = req.params.id;

    try {
      const product = await Product.findById(id).lean();
      
      res.render('products/product', { product });
      
    } catch (error) {
      console.log(error)
    }
  }

  static async removeProduct(req, res){
    const id = req.params.id

    try {
      await Product.deleteOne({_id: id})
  
      res.redirect('/products')
      
    } catch (error) {
      console.log(error)
    }
  }
  
  static async editProduct(req, res){
    const id = req.params.id

    try {
      const product = await Product.findById(id).lean()
  
      res.render('products/edit', {product})
      
    } catch (error) {
      console.log(error)
    }
  }

  static async editProductPost(req, res){
    const id = req.body.id
    const name = req.body.name
    const image = req.body.image
    const price = req.body.price
    const description = req.body.description

    try {
      const product = { name, image, price, description }
  
      await Product.updateOne({_id: id}, product)
  
      res.redirect('/products')
      
    } catch (error) {
      console.log(error)
    }
  }

}
