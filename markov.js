/** Textual markov chain generator */
class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    // Split words, omitting punctuation
    let words = text.split(/[ \r\n]+/);
    // Remove space
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // Map -> Create a new array as function is run on each element
    let chains = new Map()
    // Loop based on length of given array
    for (let i = 0; i < this.words.length; i += 1) {
      // Instantiate which word in array.
      let word = this.words[i]
      // Instantiate the following word
      let nextWord = this.words[i + 1] || null
      // If the Map already contains this word, push the following word
      if (chains.has(word)) chains.get(word).push(nextWord);
        // Or else add the word and following word
      else chains.set(word, [nextWord]);
    }
    // bind chains
    this.chains = chains
  }
  // Returns a random element of an array.
  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)]
  }
  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    // Grab all the keys from the mapped array
    let keys = Array.from(this.chains.keys())
    // Pass in an array to act as a length for obtaining a valid random number.
    let key = MarkovMachine.choice(keys)
    // Instantiate an empty array.
    let out = []
    // While the length of the previously instantiated array is less than the number of words, and the key value is not null, pereform loop.
    while (out.length < numWords && key !== null) {
      // Add the key to the out array
      out.push(key);
      //  Get new key randomly
      key = MarkovMachine.choice(this.chains.get(key))
    }
    // Joins words via spaces.
    return out.join(" ")
  }
}

let mm = new MarkovMachine("the cat in the hat");

console.log(mm.makeText())
console.log(mm.makeText(numWords=50))


module.exports = {
  MarkovMachine
}