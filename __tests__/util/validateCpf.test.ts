import CPFValidator from '../../src/util/functions/CPFValidator';

describe('CPFValidator', () => {
  describe('stripCPF', () => {
    test('should return only numbers from CPF string', () => {
      const cpf = '123.456.789-01';
      const strippedCPF = CPFValidator.stripCPF(cpf);
      expect(strippedCPF).toBe('12345678901');
    });
  });

  describe('isCPFValid', () => {
    test('should return false for invalid CPF', () => {
      const strippedCPF = '11111111111';
      const result = CPFValidator.isCPFValid(strippedCPF);
      expect(result).toBe(false);
    });

    test('should return true for valid CPF', () => {
      const strippedCPF = '12345678901';
      const result = CPFValidator.isCPFValid(strippedCPF);
      expect(result).toBe(true);
    });
  });

  describe('calculateCheckSum', () => {
    test('should calculate correct check sum for the given CPF', () => {
      const strippedCPF = '12345678901';
      const start = 0;
      const end = 9;
      const checkSum = CPFValidator.calculateCheckSum(strippedCPF, start, end);
      expect(checkSum).toBe(0);
    });
  });

  describe('isCheckSumValid', () => {
    test('should return true if check sum is valid for the given CPF', () => {
      const strippedCPF = '12345678901';
      const checkSumIndex = 9;
      const start = 0;
      const end = 9;
      const checkSum = 0;
      const result = CPFValidator.isCheckSumValid(strippedCPF, checkSumIndex, start, end, checkSum);
      expect(result).toBe(true);
    });

    test('should return false if check sum is not valid for the given CPF', () => {
      const strippedCPF = '12345678901';
      const checkSumIndex = 9;
      const start = 0;
      const end = 9;
      const checkSum = 1;
      const result = CPFValidator.isCheckSumValid(strippedCPF, checkSumIndex, start, end, checkSum);
      expect(result).toBe(false);
    });
  });
});

describe('validateCPF', () => {
  test('should return true for valid CPF', () => {
    const cpf = '136.276.707-79';
    const result = CPFValidator.validateCPF(cpf);
    expect(result).toBe(true);
  });

 test('should return false for invalid CPF', () => {
    const cpf = '111.111.111-11';
    const result = CPFValidator.validateCPF(cpf);
    expect(result).toBe(false);
  });
});
