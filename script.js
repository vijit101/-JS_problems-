let email = "xz@gmail.com";
let result;
let atrateIndex = email.indexOf("@");
let dotIndexAfter = email.indexOf(".", atrateIndex);
let strlen = email.length;

let lastindex = strlen - 1;

let forIndexFirst = email.indexOf(".");

if (atrateIndex !== -1) {
  if (
    atrateIndex > 2 &&
    dotIndexAfter - atrateIndex > 4 &&
    lastindex - dotIndexAfter > 2
  ) {
    result = "Welcome " + email + " to our website ";
  } else {
    result = "invalid email";
  }
} else {
  result = "invalid email";
}
console.log(result);
