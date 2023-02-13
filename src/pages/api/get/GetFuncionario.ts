
import Funcionario from '../../../model/FuncionarioModel';

export default async function GetFuncionario(req, res) {
  const nome:string = req.body.nome;

  const consult = await new Funcionario();
  const funcionario = await consult.getFuncionario(nome.toLocaleUpperCase());

  res.status(200);
  res.json(funcionario);
}
