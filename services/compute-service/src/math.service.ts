import { sleep } from "./utils";

export async function heavyComputation(n: number): Promise<number> {
  let result = 0;
  for (let i = 0; i < n * 1e6; i++) {
    result += Math.sqrt(i % 1000);
  }
  return result;
}

export async function slowFactorial(n: number): Promise<number> {
  if (n <= 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    await sleep(200); // simulate latency
    result *= i;
  }
  return result;
}

// intentionally bad (for stress testing)
export async function slowFibonacci(n: number): Promise<number> {
  if (n <= 1) return n;
  await sleep(200);
  return (
    (await slowFibonacci(n - 1)) +
    (await slowFibonacci(n - 2))
  );
}
