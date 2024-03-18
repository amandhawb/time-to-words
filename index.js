// expecting time to be a string in the format like '8:15' or '12:30'
const hoursInString = {
  1 : 'one',
  2 : 'two',
  3 : 'three', 
  4 : 'four',
  5 : 'five',
  6 : 'six',
  7 : 'seven',
  8 : 'eight',
  9 : 'nine', 
  10 : 'ten',
  11 : 'eleven',
  12 : 'twelve'
};

function handleQuarterTimes(hours, minutes) {
  if(minutes === 45) {
    let hoursToBeReturned = hours + 1;
    return 'quarter to ' + hoursInString[hoursToBeReturned];
  } else if(minutes === 15) {
    return 'quarter past ' + hoursInString[hours];
  }
}

function handleOClock(hours, minutes) {
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
  } else if(minutes === 15 || minutes === 45) {
    return handleQuarterTimes(hours, minutes)
  } else if(minutes === 0) {
    return handleOClock(hours, minutes)
  }
}

module.exports = { convertTimeToWords };