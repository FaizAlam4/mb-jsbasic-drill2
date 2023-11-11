import { problem4 } from "./problem4.js";
import { inventory } from "./data.js";

export let res4 = problem4(inventory);

if (import.meta.url === import.meta.main) {
  console.log("All years: ", res4);
}
