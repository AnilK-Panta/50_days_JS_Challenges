function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
}
console.log("Random number generation");
console.log(`My random number: ${randomNumberGeneratorInRange(1000, 5000)}`);
console.log(`My random number: ${randomNumberGeneratorInRange(100, 200)}`);
