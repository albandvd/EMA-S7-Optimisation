import express from "express";
import { computeRouter } from "./compute.controller";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/", computeRouter);

app.listen(PORT, () => {
  console.log(`Compute service running on http://localhost:${PORT}`);
});