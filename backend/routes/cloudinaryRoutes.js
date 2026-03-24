const express = require("express");
const router = express.Router();
const multer = require("multer");

const { cloudinaryController } = require("../controller/cloudinaryController");

// storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets/img/product");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// add image
router.post("/add-img", upload.single("image"), cloudinaryController.saveImageLocal);

// add multiple image
router.post(
  "/add-multiple-img",
  upload.array("images", 5),
  cloudinaryController.addMultipleImageLocal
);

module.exports = router;