const hoursInString = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
  30: 'half'
};

function handleGenericRule(hours, minutes) {
  if(minutes > 30) {
    let hoursToBeReturned = hours + 1;
    let minutesRemaining = 60 - minutes;
    return hoursInString[minutesRemaining] +' to ' + hoursInString[hoursToBeReturned];
  } else {
    return hoursInString[minutes] + ' past ' + hoursInString[hours];
  }
}

function handleOClock(hours) {
  return hoursInString[hours] + " o'clock"
}

function convertTimeToWords(time) {
  const splittedTime = time.split(':');
  let hours = parseInt(splittedTime[0]);
  let minutes = parseInt(splittedTime[1]);

  if (hours === 0 && minutes === 0) {
    return 'midnight';
  } else if(hours === 12 && minutes === 0) {
    return 'midday';
  } else if(minutes === 0) {
    return handleOClock(hours)
  } else {
    return handleGenericRule(hours, minutes)
  } 
}

module.exports = { convertTimeToWords };