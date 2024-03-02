/**
 * Clear the text of any character other than a letter
 * 
 * @param {string} text 
 * @returns {string}
 */
function stringWithoutSymbols(text) {
  const justLettersRegex = /[a-záéíóúüñ\s\n\r]/;
  return text
    .split('')
    .filter((letter) => letter.match(justLettersRegex))
    .join('')
}

/**
 * Remove line jumps and symbols from the text
 * 
 * @param { String } text 
 * @returns { String }
 */
export function sanitizeText(text) {
  const noLineJumpRegex = /[\t\r\n\.]/g;
  if (typeof text === 'string' && text !== '') {
    const normalizedText = text.normalize().toLocaleLowerCase();
    const cleanedString = normalizedText.replace(noLineJumpRegex, ' ');
    return cleanedString
      .split(' ')
      .filter(item => item !== '')
      .map(stringWithoutSymbols)
  }
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
  if (Array.isArray(arrayOfWords)) {
    const countedWords = arrayOfWords.reduce((accumulator, current) => {
      if (accumulator.has(current)) {
        const count = accumulator.get(current)
        accumulator.set(current, count + 1)
        return accumulator
      }
      accumulator.set(current, 1)
      return accumulator
  
    }, new Map())
    return Array.from(countedWords)
  }
  return []
}
