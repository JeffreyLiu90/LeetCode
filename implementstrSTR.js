var strStr = function(haystack, needle) {
  if (needle.length < 1) {
    return 0;
  }
  let pointer = 0;
  let index = [];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[pointer]) {
      index.push[i];
      pointer++;
    } else {
      index = [];
      pointer = 0;
    }
  }
  return index;
};
console.log(strStr("mississippi", "issip"));
