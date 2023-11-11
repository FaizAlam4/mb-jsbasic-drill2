import { inventory } from "./data.js";

export const problem6 = (inventory) => {
  inventory = inventory.filter((obj) => {
    if (obj.car_make == "Audi" || obj.car_make == "BMW") return obj;
  });
  return inventory;
};
