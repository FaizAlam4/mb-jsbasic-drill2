import { res4 } from "./testProblem4.js";

export const problem5 = () => {
  let arr = res4.filter((ele) => ele < 2000);

  return (
    "Years less than 2000:" +
    arr +
    " and length of this array is: " +
    arr.length
  );
};
