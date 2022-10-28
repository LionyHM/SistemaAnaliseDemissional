import Cargo from "../CargoModel";
import Setor from "../SetorModel";

export default interface IFuncionario{
       Nome : string;
       Cpf : string;
       Cargo : Cargo;
       Salario : number;
       InicioVigencia : Date;
       Setor : Setor;
       Ativo : boolean;
       
       getFuncionario(number):object
       setFuncionario(nome: string, cpf: string, cargo: Cargo, salario: number, inicioVigencia: Date, setor: Setor, ativo: boolean):any
}