"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bluebird_1 = __importDefault(require("bluebird"));
const secrets_1 = require("../util/secrets");
const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
    useCreateIndex: true,
    useUnifiedTopology: true
};
// export const mongoUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
exports.mongoUrl = `mongodb://${secrets_1.MONGO_HOSTNAME}:${secrets_1.MONGO_PORT}/${secrets_1.MONGO_DB}?authSource=admin`;
mongoose_1.default.Promise = bluebird_1.default;
mongoose_1.default.connect(exports.mongoUrl, options).then(() => { }).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});
//# sourceMappingURL=db.js.map