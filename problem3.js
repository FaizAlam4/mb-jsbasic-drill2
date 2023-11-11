export let problem3 = (inventory) => {
  //sort itself is a high order function
  // we are passing comparator function just like in java to sort whole data with respect to any one property of object
  inventory.sort((obj1, obj2) => {
    let val = obj1.car_model.toLowerCase() < obj2.car_model.toLowerCase();
    if (val == 1) return -1; //means in this case we won't sort
    else if (val != 1) return 1; //we will sort
  });
  return "Updated result:", inventory;

};
