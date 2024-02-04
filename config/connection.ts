import mongoose, { ConnectOptions } from "mongoose";

mongoose.connect(process.env.MONGODB_URI, {
    dbName: "video-api",
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions);

export const db = mongoose.connection;