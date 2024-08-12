import { Document, Schema, model } from "mongoose";

interface IBlog extends Document{
  title: string;
  slug: String;
  photo: String;
  description: String;
  body: string;
  createdAt: Date;
  author: string;
  status: "Draft" | "Published";
}

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
    enum: {
        values: ["Draft", "Published"],
        message: "Status must be either 'Draft' or 'Published'",
    },
    default: "Draft",
  }
}, {
    timestamps: true,
});

const Blog = model<IBlog>("Blog", BlogSchema);
export default Blog;