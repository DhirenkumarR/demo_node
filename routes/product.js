const express = require("express");
const app = express();

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productcontroller");
const tokenCheck = require("../midleware/tokencheck");
const multer = require("multer")
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null,"uploads")
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now() + "-" +  file.originalname)
  }
})


var upload = multer({storage:storage});
router.post("/", tokenCheck(),upload.single('image'), createProduct);
router.get("/", tokenCheck(), getProducts);
router.get("/:id", tokenCheck(), getProduct);
router.patch("/", tokenCheck(),upload.single('image'), updateProduct);
router.delete("/:id", tokenCheck(), deleteProduct);

module.exports = router;
