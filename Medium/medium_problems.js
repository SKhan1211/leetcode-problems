// Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
// that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 
// 1 does not map to any letters.

function letterCombinations(digits) {
  // Map digit <=> telephone button letters to a hash
  let telephoneButtonLettersHash = {
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wyxz",
  };

  // If simplest input was 2, how would I solve this? 23? 234?
    // -If 2, I return digits[2]
    // -If 23, I for for each letter in 2, combine with each letter in 3 for nested loops
    // -If 234, now I realize I keep track of number of digits for my iterations and loop with
        // i and a for loop for those number of digits?
        // How do I tell how many digits I have?
        // Maybe a loop until I end with a single digit?
      
  let digitCount = 1;
  let digitsCopy = digits;
  while (digitsCopy > 9) {
    digitsCopy = Math.floor(digits / 10);
    digitCount++;
  }

  // I need a variable tracking permutations of digits, this variable gets returned at the end
 "abc", "def" 
 for (let i = 0; i < 3; i++) {
   
 }
}

// console.log(letterCombinations("23")); // => ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.