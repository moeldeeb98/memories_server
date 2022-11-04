import mongoose from "mongoose";

<<<<<<< HEAD
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
=======
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
>>>>>>> c804f01ec7ae3e116a8ab9c07678b7778bad5a3d

export default PostMessage;
