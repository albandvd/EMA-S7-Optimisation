import express from "express";
import { counterRouter } from "./counter.controller";

const app = express();
const PORT = 3002;

app.use(express.json());
app.use("/", counterRouter);

app.listen(PORT, () => {
  console.log(`Counter service running on http://localhost:${PORT}`);
});