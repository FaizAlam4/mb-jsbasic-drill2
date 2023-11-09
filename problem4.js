export let problem4 = (inventory) => {
   let ans=[];

  for (let i of inventory) {
    ans.push(i.car_year);
  }
  return ans;
};

