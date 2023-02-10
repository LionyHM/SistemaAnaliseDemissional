import Cargo from '../../../model/CargoModel';
import Funcionario from '../../../model/FuncionarioModel';
import Setor from '../../../model/SetorModel';

export default async function GetFuncionario(req, res) {

  const nome:string = req.body.nome



  const consult = await new Funcionario()
  const funcionario = await consult.getFuncionario(nome.toLocaleUpperCase())

console.log(funcionario)
  res.status(200).json(funcionario)
}