const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  // write your solution here
  let result = '';
  const CHUNK_SIZE = 10;
  for (let i = 0; i < expr.length; i += CHUNK_SIZE) {
    let letterCode = '';
    const v = expr.slice(i, i + CHUNK_SIZE);
    if (v === '**********') {
      result += ' ';
    } else {
      for (let j = 0; j < v.length; j += 2) {
        const w = v.slice(j, j + 2);
        switch (w) {
          case '00':
            continue;
          case '10':
            letterCode += '.';
            break;
          case '11':
            letterCode += '-';
            break;
        }
      }
      result += MORSE_TABLE[letterCode];
    }
  }
  return result;
}

module.exports = {
  decode,
};
