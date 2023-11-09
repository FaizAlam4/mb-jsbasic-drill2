import {res4} from './testProblem4.js';

export const problem5 = () => {
    let years = [];
    for (let ele of res4) {
      if(ele<2000)
      years.push(ele);
    }
    return ("Years less than 2000:"+years+" and length of this array is: "+years.length);
  };
  