import dotenv from "dotenv";
dotenv.config();
import { connectToMongoDB } from "./db/database.js";

/*
  npm i express
  npm i -D @types/express
*/

import express from "express";

const app = express();

// Configure app
// app.use means all methods
app.use(express.json()); // parse incoming json on request bodies
app.use(express.static("frontend/dist"));

// Routers
import mathRouter from "./routers/mathRouter.js";
app.use("/math", mathRouter); // All routes in this router will be prefixed with "/math"
import projectRouter from "./routers/projectRouter.js";
app.use("/project", projectRouter);

const frontendRoutes = [
  "/",
  "/about",
  "/contact",
  "/projects",
  "/projects/:id",
];

for (const route of frontendRoutes) {
  app.get(route, (req, res) => {
    res.sendFile(import.meta.dirname + "/frontend/dist/index.html");
  });
}

// Routes
// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// Server start, keep at bottom
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Now listening on port ${PORT}.`);
});
