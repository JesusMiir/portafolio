// npm init -y
// npm i tsx
// npm i -D @types/node     <- install the types for typescript

import dotenv from "dotenv";
dotenv.config();
import http from "http"; // typescript doesn't know about the node libraries by default

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS";

type RequestHandler = (req: any, res: any) => void;

type EndpointRecord = Record<string, RequestHandler>;

const router: Record<HTTPMethod, EndpointRecord> = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {},
  OPTIONS: {},
};

router.GET["/"] = (req, res) => {
  res.write("Home page!");
};

router.GET["/about"] = (req, res) => {
  res.write("About page!");
};

const server = http.createServer((req, res) => {
  console.log(`A ${req.method} request was heard at ${req.url}`);
  const handler = router[req.method]?.[req.url];
  if (handler) {
    handler(req, res);
  } else {
    res.statusCode = 404;
    res.write("Not found");
  }
  res.end();
});

server.listen(process.env.PORT, () => {
  console.log(`Now listening. http://localhost:${process.env.PORT}`);
});
