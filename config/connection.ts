import mongoose, { ConnectOptions } from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/video-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions);

export const db = mongoose.connection;