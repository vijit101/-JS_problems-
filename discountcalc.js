// Write the program to calculate the discount on the given amount
// store the calculated discount in the "discount" variable
// Please do not alter anything given in the starter code
// Write the program to calculate the discount on the given amount
// store the calculated discount in the "discount" variable
// Please do not alter anything given in the starter code
function calculate(amount) {
  let discount;
  switch (true) {
    case amount < 500:
      discount = 0;
      break;
    case 500 <= amount && amount < 1000:
      discount = 10;
      break;
    case 1000 <= amount && amount < 2000:
      discount = 20;
      break;
    case 2000 <= amount && amount < 4000:
      discount = 30;
      break;
    case 4000 <= amount && amount < 5000:
      discount = 40;
      break;
    case amount >= 5000:
      discount = 50;
      break;
    case (typeof(amount) === typeof(" ")):
      discount = "Invalid Input";
    default:
      discount = "default";
  }

  // write your code here

  return discount;
}

console.log(calculate("shubham"));
