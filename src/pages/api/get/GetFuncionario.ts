import Cargo from '../../../model/CargoModel';
import Funcionario from '../../../model/FuncionarioModel';
import Setor from '../../../model/SetorModel';

export default async function GetFuncionario(req, res) {

  const id = req.body.id

const funcionario = {}



  res.status(200).json(funcionario)
}