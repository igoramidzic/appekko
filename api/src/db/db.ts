import mongoose from "mongoose";
import bluebird from "bluebird";
import {
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} from "../util/secrets";

const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
    useCreateIndex: true,
    useUnifiedTopology: true
};

// export const mongoUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
export const mongoUrl = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.Promise = bluebird;

mongoose.connect(mongoUrl, options).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});