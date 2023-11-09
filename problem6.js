import { inventory } from "./data.js";

export const problem6=(inventory)=>{
    let mycars=[];
for(let obj of inventory){
    if(obj.car_make=="Audi" || obj.car_make=="BMW")
    mycars.push(obj);
}
return mycars;
}