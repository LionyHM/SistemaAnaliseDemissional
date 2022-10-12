import IFuncionario from "./interfaces/IFuncionario";
import Cargo from "./CargoModel";
import Setor from "./SetorModel";

class Funcionario implements IFuncionario{
    Nome: string;
    Cargo: Cargo;
    Salario: number;
    InicioVigencia: Date;
    Setor: Setor;
    Ativo: boolean;
    
    constructor(nome: string, cargo: Cargo, salario: number, inicioVigencia: Date, setor: Setor, ativo: boolean){
        this.Nome = nome,
        this.Cargo = cargo,
        this.Salario = salario,
        this.InicioVigencia = inicioVigencia,
        this.Setor = setor
        this.Ativo = ativo
    }
    

    getFuncionario(id: number):object {
        let arr = [this.Nome, this.Cargo, this.Salario]
        return arr;
    }
    setFuncionario(id: number) {
        let id2 = id;
    }

}

export default Funcionario;