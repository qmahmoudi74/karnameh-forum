import { create, router, defaults, bodyParser } from "json-server";
const server = create();
const appRouter = router("db.json");
const middlewares = defaults();

server.use(middlewares);

server.get("/questions", (_req, res) => {
  res.jsonp(appRouter.get("/questions"));
});

server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(appRouter);
server.listen(3005, () => {
  console.log("JSON Server is running");
});
