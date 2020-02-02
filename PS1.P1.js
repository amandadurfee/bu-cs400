/* takes an alphabetical string (no punctuation or numbers) & returns the ordered string */
const alphabetize = string => string.split('').sort().join('');

console.log(alphabetize('supercalifragilisticexpialidocious'));
