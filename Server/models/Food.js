const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const foodSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4(),
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  daysSinceAt: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
