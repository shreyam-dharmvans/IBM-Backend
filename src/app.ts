import express from "express";
import postRouter from "./routes/postRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
//import morgan from "morgan";



if (process.env.NODE_ENV != "production") {
    dotenv.config();
}


//db connect
main()
    .then(() => {
        console.log("connected to ask-gpt database");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGODB_URL as string);
}

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
//app.use(morgan("dev"));


app.use("/post", postRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("server is listening at port 8080");
});
