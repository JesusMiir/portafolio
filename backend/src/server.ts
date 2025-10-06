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

/*
  We want our express server to serve the built React app in deployment.
  In deployment it's not going to run "npm run dev" and start vite on 5173 like in development.
  
  app.use(express.static("frontend/dist"));
  This makes it so everything in frontend/dist is public.
  This is important because the browser will need to load the built React js and css files.
  This will also make it so a user can go to "/" and get frontend/dist/index.html automatically.

  However, the react-router will not work.
  If someone tries to go to "/about", they will get a Not Found.
  So we have to tell our express server about all the frontend routes, so that no matter which frontend route the user goes to,
  it will still serve the frontend/dist/index.html file (the built react app).
*/
/*
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
*/
app.get(/\/.+/, (req, res) => {
  res.sendFile(import.meta.dirname + "/frontend/dist/index.html");
});

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
