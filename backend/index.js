// external
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const globalErrorHandler = require("./middleware/global-error-handler");
// internal
const ConnectDb = require("./config/db");
const { secret } = require("./config/secret");
const categoryRoutes = require("./routes/categoryRoutes");
const productsRoutes = require("./routes/productRoute");
const couponRoutes = require("./routes/couponRoute");
const userRoute = require("./routes/userRoute");
const orderRouter = require("./routes/orderRoute");
const userOrderRoute = require("./routes/userOrderRoute");
const cloudinaryRoutes = require("./routes/cloudinaryRoutes");
const adminRoutes = require("./routes/adminRoutes");
const brandRoutes = require("./routes/brandRoutes");

// app init
const app = express();

// middleware
app.use(express.json());
app.use(cors());
const path = require("path");

app.use("/assets", express.static(path.join(__dirname, "public/assets")));
// run db
ConnectDb();


const importData = require('./seed');

app.get('/api/seed', async (req, res) => {
  try {
    await importData();
    res.send("✅ Data Imported Successfully");
  } catch (error) {
    res.status(500).send("❌ Error importing data");
  }
});
// routes
app.use("/api/products", productsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/brand", brandRoutes);
app.use('/api/coupon', couponRoutes);
app.use('/api/user', userRoute);
app.use('/api/order', orderRouter);
app.use('/api/user-order', userOrderRoute);
app.use("/api/cloudinary", cloudinaryRoutes);
app.use("/api/admin", adminRoutes);

// root route
app.get("/", (req, res) => res.send("Apps worked successfully"));

const PORT = secret.port || 5000;

// global error handler
app.use(globalErrorHandler);
//* handle not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
