function sumOfPrimeNumbers(limit) {
  let answer = 0;

  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      answer += i;
    }
  }

  // Variable to store the sum of all prime numbers

  // Iterate through all numbers from 0 to the given limit

  // Inside the first loop create a variable to count the number of divisors of i

  // Check how many numbers divide i without a remainder by using nested loop

  // If count equals 2, then i is a prime number

  // Return the sum of all prime numbers between 0 and limit
  return answer;
}

function isPrime(n) {
  let isprimebool = true;
  if (n === 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isprimebool = false;
    }
  }
  return isprimebool;
}

console.log(sumOfPrimeNumbers(50));
