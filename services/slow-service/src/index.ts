import express from "express";
import { slowRouter } from "./slow.controller";

const app = express();
const PORT = 3004;

app.use(express.json());
app.use("/", slowRouter);

app.listen(PORT, () => {
  console.log(`Slow service running on http://localhost:${PORT}`);
});
