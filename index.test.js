const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  // it('Handles 30 - 8:30', () => {
  //   const timeInWords = convertTimeToWords('8:30');
  //   expect(timeInWords).toBe('half past eight');
  // });

  it('Handles times with 45 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times with 15 mins - 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it("Handles o'clock", () => {
    const timeInWords = convertTimeToWords('3:00');
    expect(timeInWords).toBe("three o'clock");
  });
  
});
