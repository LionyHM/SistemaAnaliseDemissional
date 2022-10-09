import Cargo from '../../../model/Cargo';
import Funcionario from '../../../model/Funcionario';
import Setor from '../../../model/Setor';

export default async function GetFuncionario(req, res) {

const setor = await new Setor("TI", 10)
const cargo = await new Cargo("Analista","Profissional que trabalha com tecnologia")
const funcionario = new Funcionario("Liony", cargo, 4000, new Date('August 19, 1975 23:15:30'), setor)

console.log(funcionario.getFuncionario)


  res.status(200).json(funcionario)
}