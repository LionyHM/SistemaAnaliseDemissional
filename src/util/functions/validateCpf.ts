export default function validateCPF(cpf: string): boolean {
  const strippedCPF = cpf.replace(/[^\d]+/g, '');

  if (strippedCPF.length !== 11 || /^(0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11})$/.test(strippedCPF)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(strippedCPF[i]) * (10 - i);
  }

  let rev = 11 - (sum % 11);
  rev = rev === 10 || rev === 11 ? 0 : rev;
  if (rev !== parseInt(strippedCPF[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(strippedCPF[i]) * (11 - i);
  }

  rev = 11 - (sum % 11);
  rev = rev === 10 || rev === 11 ? 0 : rev;
  if (rev !== parseInt(strippedCPF[10])) return false;

  return true;
}
