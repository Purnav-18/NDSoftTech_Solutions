const express = require("express");
const router = express.Router();
const {getProducts,createProduct,updateProduct,deleteProduct} = require("../controllers/productController");
const auth = require("../middlewares/authMiddleware");

router.get("/", auth, getProducts);
router.post("/", auth, createProduct);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

module.exports = router;
