function sieveOfEratothenes(num) {
  const numArr = [];
  const numSqrt = Math.sqrt(num);

  for (let i = 0; i <= num; i++) {
    numArr.push(true);
  }

  numArr[0] = false;
  numArr[1] = false;

  for (let x = 2; x < Math.sqrt(num); x++) {
    for (let y = 2; x * y <= num; y++) {
      numArr[x * y] = false;
    }
  }

  const primes = [];
  for (let z = 0; z < numArr.length; z++) {
    if (numArr[z]) primes.push(z);
  }

  return primes;
}

console.log(sieveOfEratothenes(20000));
