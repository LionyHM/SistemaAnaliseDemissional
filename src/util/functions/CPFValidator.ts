class CPFValidator {
  static stripCPF(cpf: string) {
    return cpf.replace(/[^\d]+/g, '');
  }
  
  static isCPFValid(strippedCPF: string) {
    return strippedCPF.length === 11 && !/^(\d)\1{10}$/.test(strippedCPF);
  }
  
  static calculateCheckSum(strippedCPF: string, start: number, end: number) {
    let sum = 0;
    for (let i = start; i < end; i++) {
      sum += parseInt(strippedCPF[i]) * (end - i + 1);
    }
    let checkSum = 11 - (sum % 11);
    checkSum = checkSum > 9 ? 0 : checkSum;
    return checkSum;
  }
  
  static isCheckSumValid(strippedCPF: string, checkSumIndex: number, start: number, end: number, checkSum: number) {
    return parseInt(strippedCPF[checkSumIndex]) === checkSum;
  }
  
  static validateCPF(cpf: string): boolean {
      const strippedCPF = this.stripCPF(cpf);
      if (!this.isCPFValid(strippedCPF)) {
        return false;
      }
      const checkSum1 = this.calculateCheckSum(strippedCPF, 0, 9);
      const checkSum2 = this.calculateCheckSum(strippedCPF, 0, 10);
      return (
        this.isCheckSumValid(strippedCPF, 9, 0, 9, checkSum1) &&
        this.isCheckSumValid(strippedCPF, 10, 0, 10, checkSum2)
      );
    }
  }
  
  export default CPFValidator;