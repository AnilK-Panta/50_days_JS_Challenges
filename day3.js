function reverseGivenInteger(num) {
  return parseFloat(num.toString().split("").reverse().join(""));
}
console.log("Reverse Integer");
console.log(`Reversed integer is: ${reverseGivenInteger(3849)}`);
console.log(`Reversed integer is: ${reverseGivenInteger(2222)}`);
console.log(`Reversed integer is: ${reverseGivenInteger(1002)}`);
