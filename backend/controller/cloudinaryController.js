const path = require("path");

// single image upload
const saveImageLocal = async (req, res) => {
  try {

    const imageUrl =
      "http://localhost:5000/assets/img/product/" + req.file.filename;

    res.status(200).json({
      success: true,
      message: "image uploaded successfully",
      data: {
        url: imageUrl,
        id: req.file.filename,
      },
    });

  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Image upload failed",
    });
  }
};


// multiple image upload
const addMultipleImageLocal = async (req, res) => {
  try {

    const files = req.files;

    const images = files.map((file) => ({
      url: "http://localhost:5000/assets/img/product/" + file.filename,
      id: file.filename,
    }));

    res.status(200).json({
      success: true,
      message: "images uploaded successfully",
      data: images,
    });

  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Image upload failed",
    });
  }
};

exports.cloudinaryController = {
  saveImageLocal,
  addMultipleImageLocal,
};