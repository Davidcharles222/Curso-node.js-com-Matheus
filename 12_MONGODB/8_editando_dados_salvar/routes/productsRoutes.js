const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.showProducts);
router.get("/create", ProductController.createProduct);
router.get("/:id", ProductController.getProduct);
router.post("/create", ProductController.createProductPost);
router.post("/remove/:id", ProductController.removeProduct);
router.get("/edit/:id", ProductController.editProduct)
router.post("/edit", ProductController.editProductPost)

module.exports = router;
