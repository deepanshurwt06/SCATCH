const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose-connection");
const usersRoutes = require("./routes/usersRoutes");
const ownersRoutes = require("./routes/ownersRoutes");
const productsRoutes = require("./routes/productsRoutes");
const indexRoutes = require("./routes/index");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use("/owner", ownersRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/", indexRoutes);



app.listen(3000, () => {
  console.log("server started");
});
