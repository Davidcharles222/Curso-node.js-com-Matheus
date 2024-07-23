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

    const product = new Product({name,image, price, description})

    await product.save()

    res.redirect('/')
  }

  // static async getProduct(req, res) {
  //   let id = req.params.id;

  //   // Verifica se o ID já está no formato hexadecimal de 24 caracteres
  //   if (typeof id === 'string' && id.length === 24 && /^[0-9a-fA-F]+$/.test(id)) {
  //     const product = await Product.getProductById(id);
  //     res.render('products/product', { product });
  //   }else{// Converte o ID para uma string hexadecimal de 24 caracteres
  //     const hexString = Buffer.from(id.toString()).toString('hex').padStart(24, '0')
  //     const product = await Product.getProductById(hexString);
  //     res.render('products/product', { product });
  //   }

  // }

  // static async removeProduct(req, res){
  //   const id = req.params.id

  //   await Product.removeProductById(id)

  //   res.redirect('/')
  // }
  
  // static async editProduct(req, res){
  //   const id = req.params.id

  //   const product = await Product.getProductById(id)

  //   res.render('products/edit', {product})
  // }

  // static async editProductPost(req, res){
  //   const id = req.body.id
  //   const name = req.body.name
  //   const image = req.body.image
  //   const price = req.body.price
  //   const description = req.body.description

  //   const product = new Product(name, image, price, description)

  //   await product.updateProduct(id)

  //   res.redirect('/')
  // }

}
