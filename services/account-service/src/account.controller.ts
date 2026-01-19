import { Router } from "express";
import { userAccount } from "./account.store";
import { sleep } from "./utils";

export const accountRouter = Router();

/**
 * GET /account
 */
accountRouter.get("/account", (req, res) => {
  res.json({ balance: userAccount.balance });
});

/**
 * POST /deposit
 */
accountRouter.post("/deposit", async (req, res) => {
  const amount = Number(req.body.amount);

  if (Number.isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  await sleep(500); // simulate latency
  userAccount.balance += amount;

  res.json({ balance: userAccount.balance });
});

/**
 * POST /withdraw
 */
accountRouter.post("/withdraw", async (req, res) => {
  const amount = Number(req.body.amount);

  if (Number.isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  await sleep(200); // simulate latency

  if (userAccount.balance < amount) {
    return res.status(400).json({ error: "Insufficient funds" });
  }

  userAccount.balance -= amount;
  res.json({ balance: userAccount.balance });
});

/**
 * GET /health
 */
accountRouter.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
