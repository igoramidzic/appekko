import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path'
dotenv.config({ path: ".env" });

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, './../../appekko-ui/dist/appekko-ui')));

// Return frontend app
app.use('**', express.static(path.join(__dirname, './../../appekko-ui/dist/appekko-ui')))

export default app;
