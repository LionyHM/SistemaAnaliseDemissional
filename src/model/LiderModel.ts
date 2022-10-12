import ILider from "./interfaces/ILider";
import Funcionario from "./FuncionarioModel";
import Setor from "./SetorModel";

export default class Lider implements ILider{
    Funcionario: Funcionario;
    Setor: Setor;
    
    constructor(funcionario: Funcionario, setor: Setor){
        this.Funcionario = funcionario,    
        this.Setor = setor
    }
}