import findString from '../../src/util/functions/findString';

describe('findString', () => {
  it('should return true if nameEntered is included in nameToCompare', () => {
    const nameEntered = 'john';
    const nameToCompare = 'John Doe';

    const result = findString(nameEntered, nameToCompare);

    expect(result).toBe(true);
  });

  it('should return false if nameEntered is not included in nameToCompare', () => {
    const nameEntered = 'jane';
    const nameToCompare = 'John Doe';

    const result = findString(nameEntered, nameToCompare);

    expect(result).toBe(false);
  });

  it('should be case-insensitive', () => {
    const nameEntered = 'JoHn';
    const nameToCompare = 'John Doe';

    const result = findString(nameEntered, nameToCompare);

    expect(result).toBe(true);
  });
});