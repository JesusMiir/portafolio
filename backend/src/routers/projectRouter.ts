import { Router } from "express";
import { addProject } from "../controllers/projectControllers";

const projectRouter = Router();

projectRouter.post("/add", async (req, res) => {
  const result = await addProject(req.body);
  res.status(result.status);
  res.json({
    message: result.message,
    data: result.data?.toObject(), // so it's a plain object and not a mongoose object
  });
});

export default projectRouter;
