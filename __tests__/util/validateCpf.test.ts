import validateCPF from '../../src/util/functions/validateCpf';

describe('validateCPF', () => {
  it('deve retornar true para um CPF válido', () => {
    const cpf = '12345678909';
    const result = validateCPF(cpf);
    expect(result).toBe(true);
  });

  it('deve retornar false para um CPF inválido', () => {
    const cpf = '11122233344';
    const result = validateCPF(cpf);
    expect(result).toBe(false);
  });

  it('deve retornar false se o CPF tiver menos de 11 dígitos', () => {
    const cpf = '1234567890';
    const result = validateCPF(cpf);
    expect(result).toBe(false);
  });

  it('deve retornar false se o CPF tiver mais de 11 dígitos', () => {
    const cpf = '1234567890123';
    const result = validateCPF(cpf);
    expect(result).toBe(false);
  });

  it('deve retornar false se o CPF for composto por todos os dígitos iguais', () => {
    const cpf = '11111111111';
    const result = validateCPF(cpf);
    expect(result).toBe(false);
  });

  it('deve retornar false se o cálculo do segundo dígito verificador não corresponder ao último dígito do CPF', () => {
    const strippedCPF = '12345678901';
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(strippedCPF.charAt(i)) * (11 - i);
    }
    let rev = 11 - (sum % 11);
    if (rev === 10 || rev === 11) rev = 0;
    expect(validateCPF(strippedCPF)).toBe(false);
  });
});

