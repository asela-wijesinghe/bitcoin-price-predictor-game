import mongoose from "mongoose";

const ScoresSchema = new mongoose.Schema({
  user: Object,
  score: Object,
});

export default  mongoose.model("scores", ScoresSchema);
