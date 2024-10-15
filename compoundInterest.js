function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  let answer = 0;
  let year = 1;
  while (year <= numberOfYears) {
    if (year === 1) {
      answer = principalAmount + answer + principalAmount * annualInterestRate;
    } else {
      answer = answer + answer * annualInterestRate;
    }
    year++;
  }
  return answer;
}

console.log(compoundInterest(500, 0.08, 5));
