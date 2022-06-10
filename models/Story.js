const mongoose = require("mongoose");
const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "public",
    enum: ["public", "private"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  recommendedGenre: {
    type: String,
    required: true,
  },
  recommendedMoviesList: {
    type: Array,
    required: false,
  },
  emotionAnalysis: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Story", StorySchema);
