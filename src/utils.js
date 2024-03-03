/**
 * Receives a string and cleans it of any different
 * characters other than letters and splits it into
 * individual words within an array
 * 
 * @param { string } text 
 * @returns { [string] }
 */
export function stringToValidWords(text) {
  const normalizedText = text.normalize().toLowerCase();
  const arrayOfWords = normalizedText.split(' ');

  // loop over the array of words
  // split each word into an array of individual characters
  // filter that array to match just valid characters
  const cleanedText = arrayOfWords.map((word) => {
    return word
      .split('')
      .filter((word) => word.match(/[a-záéíóúüñ]/))
      .join('')
  })

  // Filter out any empty array
  return cleanedText.filter((item) => item.length > 0)
}

/**
 * Count the number of times a word is present in an array
 * returning a bidimensional array with the word as key
 * and the number of times is present as value
 * 
 * @param {[string]} arrayOfWords
 * @returns {[[string, number]]}
 */
export function wordCounter(arrayOfWords) {
  return arrayOfWords.reduce((accumulator, current) => {
    if (current in accumulator) {
      accumulator[current] += 1;
      return accumulator
    }
    accumulator[current] = 1;
    return accumulator
  }, {})
}
