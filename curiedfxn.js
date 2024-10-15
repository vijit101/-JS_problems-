// Function to calculate the price of a pizza based on size, toppings, and quantity
function pizzaPricing(size) {
  let obj = {};

  // Create an object to store the base prices for each pizza size

  return function (toppingAry) {
    return function (quantity) {
      let price;
      if (size == "small") {
        price = 8;
      } else if (size === "medium") {
        price = 10;
      } else if (size === "large") {
        price = 12;
      }
      let pizzaprice = price + toppingAry.length * 1.5;
      price = pizzaprice * quantity;
      return price.toFixed(2);
    };
  };
  // Return a function(curried function) that takes the selected toppings as a parameter

  // Return another function inside the curried function that takes the quantity as a parameter
}
console.log(pizzaPricing("large")(["bacon", "cheese"])(1));
