const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });
  
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

  it("Handles number between 1 minutes to 30 minutes", () => {
    expect(convertTimeToWords('2:03')).toBe("three past two");
    expect(convertTimeToWords('2:11')).toBe("eleven past two");
    expect(convertTimeToWords('2:15')).toBe("quarter past two");
    expect(convertTimeToWords('2:30')).toBe("half past two");
  });

  it("Handles number between 30 minutes to 60 minutes", () => {
    expect(convertTimeToWords('2:33')).toBe("twenty seven to three");
    expect(convertTimeToWords('2:40')).toBe("twenty to three");
    expect(convertTimeToWords('2:55')).toBe("five to three");
  });
  
});
