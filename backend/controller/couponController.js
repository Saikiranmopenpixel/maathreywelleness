const Coupon = require('../models/Coupon');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const addCoupon = async (req, res) => {
  try {
    const newCoupon = new Coupon(req.body);
    await newCoupon.save();
    res.send({ message: 'Coupon Added Successfully!' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const addAllCoupon = async (req, res) => {
  try {
    await Coupon.deleteMany();
    await Coupon.insertMany(req.body);
    res.status(200).send({
      message: 'Coupon Added successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({}).sort({ _id: -1 });
    res.send(coupons);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getCouponById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    res.send(coupon);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
const updateCoupon = async (req, res, next) => {
  try {
    
    //console.log("BODY DATA:", req.body);

    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      return res.status(404).send({ message: "Coupon not found" });
    }

    coupon.title = req.body.title;
    coupon.couponCode = req.body.couponCode;
    coupon.endTime = dayjs(req.body.endTime).toDate(); // ✅ FIXED
    coupon.discountPercentage = req.body.discountPercentage;
    coupon.minimumAmount = req.body.minimumAmount;
    //coupon.productType = req.body.productType;
    coupon.logo = req.body.logo;

    await coupon.save();

    res.send({ message: "Coupon Updated Successfully!" });
  } catch (err) {
    console.log("ERROR:", err); // 👈 IMPORTANT
    next(err);
  }
};

// deleteCoupon
const deleteCoupon = async (req, res,next) => {
  try {
    await Coupon.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success:true,
      message:'Coupon delete successfully',
    })
  } catch (error) {
    next(error)
  }
};

module.exports = {
  addCoupon,
  addAllCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon,
};
