export let sharedCounter = 0;

export function increment(): number {
  sharedCounter++;
  return sharedCounter;
}
