export let problem2=(inventory)=>{
    let len=inventory.length-1;
    let lastCarData=inventory[len];
    return("Last Car is a "+lastCarData.car_make+" "+lastCarData.car_model);
    
}