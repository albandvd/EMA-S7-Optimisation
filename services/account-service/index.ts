import express from "express";
import { accountRouter } from "./account.controller";

const app = express();
const PORT = 3003;

app.use(express.json());
app.use("/", accountRouter);

app.listen(PORT, () => {
  console.log(`Account service running on http://localhost:${PORT}`);
});
