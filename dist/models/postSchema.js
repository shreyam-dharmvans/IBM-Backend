import mongoose, { Schema } from "mongoose";
const postSchema = new Schema({
    title: { type: String, required: true },
    venue: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
});
export const Post = mongoose.model('Post', postSchema);
