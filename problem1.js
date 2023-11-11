export let problem1 = (inventory) => {
  let ans = inventory;

  ans = ans.map((obj) => {
    if (obj.id === 33) return obj;
  });
  for (let o of ans) {
    //as map returns array and adds undefined for elements where condition is not met, we have to run a loop and condition to get desired result
    if (o != undefined)
      return "Car 33 is a " + o.car_year + " " + o.car_make + " " + o.car_model;
  }
};
