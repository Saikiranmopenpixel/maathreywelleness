const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
      logo: {
  type: String,
  default: ""
},
    couponCode: {
      type: String,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    discountPercentage: {
      type: Number,
      required: true,
    },
    minimumAmount: {
      type: Number,
      required: true,
    },
    productType: {
      type: String,
      
    },
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.models.Coupon || mongoose.model('Coupon', couponSchema);
module.exports = Coupon;
