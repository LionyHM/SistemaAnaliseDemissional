import ILider from "./interfaces/ILider";
import Funcionario from "./Funcionario";
import Setor from "./Setor";

export default class Lider implements ILider{
    Funcionario: Funcionario;
    Setor: Setor;
    
    constructor(funcionario: Funcionario, setor: Setor){
        this.Funcionario = funcionario,    
        this.Setor = setor
    }
}