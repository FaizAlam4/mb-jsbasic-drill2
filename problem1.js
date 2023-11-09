export let problem1=(inventory)=>{
    let ans=inventory;
    for(let i of ans){
    if(i.id===33){
      return ("Car 33 is a "+i.car_year+" "+i.car_make+" "+i.car_model);  
   
    }
    }
}

