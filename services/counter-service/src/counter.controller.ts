import { Router } from "express";
import { increment } from "./counter.store";

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const counterRouter = Router();

/**
 * GET /counter
 * Simulates slow shared state access
 */
counterRouter.get("/counter", async (req, res) => {
  await sleep(5000); // simulate slow DB
  const value = increment();
  res.json({ counter: value });
});

/**
 * GET /health
 */
counterRouter.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
