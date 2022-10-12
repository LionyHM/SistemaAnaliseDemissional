import Cargo from '../../../model/CargoModel';
import Funcionario from '../../../model/FuncionarioModel';
import Setor from '../../../model/SetorModel';

export default async function GetFuncionario(req, res) {

const setor = await new Setor("TI", 10)
const cargo = await new Cargo("Analista","Profissional que trabalha com tecnologia")
const funcionario = new Funcionario("Liony", cargo, 4000, new Date('August 19, 1975 23:15:30'), setor, true)

await funcionario.setFuncionario


  res.status(200).json(funcionario)
}