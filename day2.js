function reverseAString(str) {
  return str.split("").reverse().join("");
}
console.log("Reverse String");
console.log(`Reversed string is: ${reverseAString("JavaScript is awesome")}`);
console.log(
  `Reversed string is: ${reverseAString("Peter Parker is Spiderman")}`
);
console.log(`Reversed string is: ${reverseAString("codedamn")}`);
