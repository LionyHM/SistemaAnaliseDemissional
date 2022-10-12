import Cargo from "../CargoModel";
import Setor from "../SetorModel";

export default interface IFuncionario{
       Nome : string;
       Cargo : Cargo;
       Salario : number;
       InicioVigencia : Date;
       Setor : Setor;
       Ativo : boolean;
       
       getFuncionario(number):object
       setFuncionario(number):any
}