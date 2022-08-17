const stringLength = (string) => {
  if(string.length >= 1 && string.length <= 10)
    return string.length;
  else  return 'String Longer that 10 or Less than 1';
}

module.exports = stringLength;
