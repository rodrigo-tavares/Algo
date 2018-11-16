const reverseWords = str =>
  str
    .split(" ")
    .map(word => {
      let reveseWord = "";

      for (let i = word.length - 1; i >= 0; i--) {
        reveseWord += word[i];
      }

      return reveseWord;
    })
    .join(" ");
