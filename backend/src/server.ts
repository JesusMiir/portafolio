import dotenv from "dotenv";
dotenv.config();
import { connectToMongoDB } from "./db/database";

/*
  npm i express
  npm i -D @types/express
*/

import express from "express";

const app = express();

// Configure app
// app.use means all methods
app.use(express.json()); // parse incoming json on request bodies

// Routers
import mathRouter from "./routers/mathRouter";
app.use("/math", mathRouter); // All routes in this router will be prefixed with "/math"
import projectRouter from "./routers/projectRouter";
app.use("/project", projectRouter);

// Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

// Server start, keep at bottom
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Now listening on port ${PORT}.`);
});
