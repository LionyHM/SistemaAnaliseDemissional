import Funcionario from '../../src/model/FuncionarioModel';

jest.mock('../../src/model/FuncionarioModel', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getFuncionario: jest.fn().mockResolvedValue('funcionario mockado')
    };
  });
});

describe('getFuncionario', () => {
    it('deve retornar funcionario mockado', async () => {
      const req = {
        body: {
          nome: 'nome de teste'
        }
      };
      const res = {
        status: jest.fn().mockReturnValue({}),
        json: jest.fn().mockReturnValue({})
      };
      
      const nome:string = req.body.nome;
      const consult = await new Funcionario();
      await consult.getFuncionario(nome.toLocaleUpperCase());

      const mockFuncionario = consult.getFuncionario as jest.MockedFunction<typeof consult.getFuncionario>;
      await mockFuncionario(nome.toLocaleUpperCase());
      expect(mockFuncionario).toHaveBeenCalledWith(nome.toLocaleUpperCase());
    });
  });