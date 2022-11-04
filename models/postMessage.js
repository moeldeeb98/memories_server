import mongoose from "mongoose";

const PostMessage = mongoose.model(
  "PostMessage",
  mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  })
);

export default PostMessage;
