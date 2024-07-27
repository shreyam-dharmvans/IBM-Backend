import mongoose, { Schema } from "mongoose";

export interface post {
    title: string;
    venue: string;
    time: string;
    date: Date,
    description: String
}

const postSchema = new Schema<post>({
    title: { type: String, required: true },
    venue: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
});


export const Post = mongoose.model<post>('Post', postSchema);