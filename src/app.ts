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

var whitelist = ['http://localhost:5173', 'https://5173-idx-ibm-skillsbuild-1721880470621.cluster-qpa6grkipzc64wfjrbr3hsdma2.cloudworkstations.dev', 'https://noPoverty-dy.netlify.app']

// https://askgpt-ai.netlify.app/
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));
//{ origin: "http://localhost:5173", credentials: true }
//app.use(morgan("dev"));


app.use("/post", postRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("server is listening at port 8080");
});
