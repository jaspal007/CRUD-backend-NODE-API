const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRouter = require("./routes/product.routes.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRouter);

app.get("/", (req, res) => {
  res.send("hello you!!");
});

mongoose
  .connect(
    "mongodb+srv://jaspalsinghgkp512:KUhgdAABUj64Oe8k@cluster0.c9emq6o.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to database!");
    app.listen(3000, () => {
      console.log("Server is live on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
