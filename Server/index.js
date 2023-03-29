const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const FoodModel = require("./models/Food");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/", {
  useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {
  const foodName = req.body.foodName;
  const days = req.body.days;

  const food = new FoodModel({ foodName: foodName, daysSinceAt: days });
  try {
    await food.save();
    res.send("data inserted");
  } catch (error) {
    console.log({ error });
  }
});

app.get("/read", async (req, res) => {
  FoodModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});
