import Express from "express";
import getquote from "./index.js";

const app = Express();
const port = 5200;

app.listen(port, () => {
  console.log(`Server is live listening on http://localhost:${port}`);
});

app.get("*", (req, res) => {
  res.send(getquote);
});
