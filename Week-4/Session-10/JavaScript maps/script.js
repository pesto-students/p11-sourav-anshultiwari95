function calcWordFrequencies() {
   var wordMap = new Map();
   var input = prompt("Enter a list of words separated by spaces:");

   var words = input.split(" ");

   words.forEach(function (word) {
      if (wordMap.has(word)) {
         wordMap.set(word, wordMap.get(word) + 1);
      } else {
         wordMap.set(word, 1);
      }
   });

   wordMap.forEach(function (frequency, word) {
      console.log(word, frequency);
   });
}
