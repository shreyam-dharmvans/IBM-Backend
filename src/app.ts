import express from "express";
import postRouter from "./routes/postRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import morgan from "morgan";
import cors from "cors";


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
//app.use(morgan("dev"));
app.use(cors({ origin: "https://5173-idx-ibm-skillsbuild-1721880470621.cluster-qpa6grkipzc64wfjrbr3hsdma2.cloudworkstations.dev/view-events", credentials: true }));

app.use("/post", postRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("server is listening at port 8080");
});