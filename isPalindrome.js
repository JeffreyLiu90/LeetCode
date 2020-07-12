// var isPalindrome = function(x) {
//   const reverse = parseInt(
//     (x + "")
//       .split("")
//       .reverse()
//       .join("")
//   );

//   return x === reverse ? true : false;
// };

var isPalindrome = function(x) {
  return Math.abs(x) - Math.abs(x) === 0 ? true : false;
};
console.log(isPalindrome(121));
