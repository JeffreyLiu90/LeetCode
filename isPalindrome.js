var isPalindrome = function(x) {
  const reverse = parseInt(
    (x + "")
      .split("")
      .reverse()
      .join("")
  );

  return x === reverse ? true : false;
};

console.log(isPalindrome(121));
