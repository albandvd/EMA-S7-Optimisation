import { Router } from "express";

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const slowRouter = Router();

/**
 * GET /slow
 * Intentionally slow endpoint
 */
slowRouter.get("/slow", async (req, res) => {
  await sleep(20000); // 20 seconds
  res.status(200).json({ message: "Slow operation finished" });
});

/**
 * GET /health
 */
slowRouter.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
