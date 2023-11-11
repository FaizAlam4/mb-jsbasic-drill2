export let problem4 = (inventory) => {
  inventory = inventory.map((obj) => {
    return obj.car_year;
  });
  return inventory;
};
