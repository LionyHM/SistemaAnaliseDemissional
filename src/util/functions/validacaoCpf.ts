export default function validateCPF(cpf: string): boolean {
    const strippedCPF = cpf.replace(/[^\d]+/g, '');
  
    if (strippedCPF.length !== 11 || strippedCPF.match(/^(0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11})$/)) {
      return false;
    }
  
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(strippedCPF.charAt(i)) * (10 - i);
    }
  
    let rev = 11 - (sum % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(strippedCPF.charAt(9))) return false;
  
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(strippedCPF.charAt(i)) * (11 - i);
    }
  
    rev = 11 - (sum % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(strippedCPF.charAt(10))) return false;
  
    return true;
  }