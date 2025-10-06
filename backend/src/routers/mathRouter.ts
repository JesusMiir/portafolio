import { Router } from "express";
import { addXAndY } from "../controllers/mathControllers";
const mathRouter = Router();

// 3 ways to receieve data
// 1. req.body
mathRouter.post("/add-with-body", (req, res) => {
  try {
    console.log(req.body);
    const result = addXAndY(req.body.x, req.body.y);

    // res.json is a combination of JSON.stringify and res.send, and also sets headers
    res.json({
      result: result,
    });
  } catch (error) {
    res.status(error?.status || 500);
    res.json({
      message: error?.message || "Something went wrong",
    });
  }
});
// 2. req.params
mathRouter.post("/add-with-url-params/:x/:y", (req, res) => {
  console.log(req.params);
  res.send(Number(req.params.x) + Number(req.params.y));
});
// 3. req.query
mathRouter.post("/add-with-search-params", (req, res) => {
  //    POST /math/add-with-search-params?x=4&y=8
  console.log(req.query);
  res.send(Number(req.query.x) + Number(req.query.y));
});

export default mathRouter;
