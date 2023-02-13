import findCPF from '../../src/util/functions/findCpf';

describe('findCPF', () => {
  it('should return true if the userCPF matches the CPFList', () => {
    const userCPF = '12345678901';
    const CPFList = '12345678901';

    expect(findCPF(userCPF, CPFList)).toBe(true);
  });

  it('should return false if the userCPF does not match the CPFList', () => {
    const userCPF = '12345678901';
    const CPFList = '10987654321';

    expect(findCPF(userCPF, CPFList)).toBe(false);
  });
});