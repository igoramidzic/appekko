"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
_a = process.env, exports.MONGO_USERNAME = _a.MONGO_USERNAME, exports.MONGO_PASSWORD = _a.MONGO_PASSWORD, exports.MONGO_HOSTNAME = _a.MONGO_HOSTNAME, exports.MONGO_PORT = _a.MONGO_PORT, exports.MONGO_DB = _a.MONGO_DB, exports.SESSION_SECRET = _a.SESSION_SECRET, exports.JWT_SECRET = _a.JWT_SECRET;
if (!exports.MONGO_USERNAME) {
    logger_1.default.error("Set MONGO_USERNAME environment variable.");
    process.exit(1);
}
if (!exports.MONGO_PASSWORD) {
    logger_1.default.error("Set MONGO_PASSWORD environment variable.");
    process.exit(1);
}
if (!exports.MONGO_HOSTNAME) {
    logger_1.default.error("Set MONGO_HOSTNAME environment variable.");
    process.exit(1);
}
if (!exports.MONGO_PORT) {
    logger_1.default.error("Set MONGO_PORT environment variable.");
    process.exit(1);
}
if (!exports.MONGO_DB) {
    logger_1.default.error("Set MONGO_PASSWORD environment variable.");
    process.exit(1);
}
if (!exports.SESSION_SECRET) {
    logger_1.default.error("Set SESSION_SECRET environment variable.");
    process.exit(1);
}
if (!exports.JWT_SECRET) {
    logger_1.default.error("Set JWT_SECRET environment variable.");
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map