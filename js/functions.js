function getStringLength(string, length) {
  if(string.length <= length) {
    return true;
  }
  return false;
}

function palindromeCheck(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    const char = normalizedString[i];
    newString += char;
  }
  return newString === normalizedString;
}

function extractNumbers(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!Number.isNaN(parseInt(char, 10))) {
      result += char;
    }
  }
  return result === '' ? NaN : Number(result);
}
