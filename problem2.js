export let problem2 = (inventory) => {
  let len = inventory.length - 1;
  // let lastCarData=inventory[len];
  let lastCar = inventory.filter((obj) => inventory.indexOf(obj) >= len);

  return "Last Car is a " + lastCar[0].car_make + " " + lastCar[0].car_model;
};
