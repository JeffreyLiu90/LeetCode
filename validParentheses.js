let bracket = {
  "(": ")",
  "[": "]",
  "{": "}"
};
var isValid = function(s) {
  let arr = [];

  for (let item of s) {
    console.log("S:", item);
    if (bracket[item]) {
      console.log("brItem:", bracket[item]);
      arr.push(bracket[item]);
    } else {
      console.log("arrpop", arr.pop());
      if (arr.pop() !== item) return false;
    }
  }
  console.log("arr: ", arr);
  return !arr.length;
};

console.log(isValid("(]"));
console.log(isValid("()[]{}"));
