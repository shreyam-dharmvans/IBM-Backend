import { Post } from "../models/postSchema.js"
import { Request, Response } from "express";
import { Error } from "mongoose";


export const allPosts = async (req: Request, res: Response) => {
    try {
        const allPosts = await Post.find({});
        return res.status(200).json({ message: "OK", allPosts });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ message: "ERROR", cause: err });
    }
}

export const addPost = async (req: Request, res: Response) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();

        return res.status(200).json({ message: "OK" });
    }
    catch (err) {
        return res.status(400).json({ message: "ERROR", cause: err });
    }
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const { postId }: { postId: string } = req.body;

        await Post.findByIdAndDelete(postId);

        return res.status(200).json({ message: "OK" });
    } catch (err) {
        return res.status(400).json({ message: "ERROR", cause: err });
    }

}