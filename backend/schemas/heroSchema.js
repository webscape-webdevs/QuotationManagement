const mongoose = require("mongoose");
const { Schema } = mongoose;

const heroSchema = new Schema({
  image: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const hero = mongoose.model("hero", heroSchema);

module.exports = hero;
