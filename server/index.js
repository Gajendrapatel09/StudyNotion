const express = require("express");

const app = express();

const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");


const cors = require("cors");  // for entertaining the request of frontEnd we have to use i and use cors
const fileUpload = require("express-fileupload");
const { cloudinaryconnect } = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;

// database se connectivity
database.connect();

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: JSON.parse(process.env.CORS_ORIGIN),
    credentials: true,
    maxAge: 14400,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudinaryconnect();

//routes
app.use("/api/v1/auth", userRoutes);

app.use("/api/v1/payment", paymentRoutes);

app.use("/api/v1/profile", profileRoutes);

app.use("/api/v1/course", courseRoutes);

app.use("/api/v1/contact", require("./routes/ContactUs"));

app.get("/", (req, res) => {
  res.status(200).json({
    success:true,
    message: "Welcome to the API",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
