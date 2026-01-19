import { Router } from "express";
import {
  heavyComputation,
  slowFactorial,
  slowFibonacci
} from "./math.service";

export const computeRouter = Router();

/**
 * GET /compute
 */
computeRouter.get("/compute", async (req, res) => {
  const result = await heavyComputation(10);
  res.json({ result });
});

/**
 * GET /factorial/:n
 */
computeRouter.get("/factorial/:n", async (req, res) => {
  const n = Number(req.params.n);

  if (isNaN(n) || n < 0 || n > 15) {
    return res
      .status(400)
      .json({ error: "n must be between 0 and 15" });
  }

  const result = await slowFactorial(n);
  res.json({ n, factorial: result });
});

/**
 * GET /fibonacci/:n
 */
computeRouter.get("/fibonacci/:n", async (req, res) => {
  const n = Number(req.params.n);

  if (isNaN(n) || n < 0 || n > 25) {
    return res
      .status(400)
      .json({ error: "n must be between 0 and 25" });
  }

  const result = await slowFibonacci(n);
  res.json({ n, fibonacci: result });
});

/**
 * GET /health
 */
computeRouter.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
