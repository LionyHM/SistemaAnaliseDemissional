import IFuncionario from "./interfaces/IFuncionario";
import Cargo from "./CargoModel";
import Setor from "./SetorModel";
import funcionario from "../data/funcionario"
import cargo from "../data/cargo"
import setor from "../data/setor"
import findString from "../util/functions/findString";


class Funcionario implements IFuncionario{
    Nome: string;
    Cpf: string;
    Cargo: Cargo;
    Salario: number;
    InicioVigencia: Date;
    Setor: Setor;
    Ativo: boolean;    
    

    async getFuncionario(nome: string) {
        
        try {

            const funcResponse = await funcionario.funcionario.filter(f => findString(nome, f.Nome.toLocaleUpperCase()) && f.Fim_Vigencia == null)
            let cargoResponse = {}
            let setorResponse = {}
            
            if(funcResponse.length > 0){
                try {
                    funcResponse.forEach(f => {
                        cargoResponse = cargo.cargo.find(c => c.IdCargo == f.FK_IdCargo)
                        setorResponse = setor.setor.find(s => s.IdSetor == f.FK_IdSetor)

                        f.cargoResponse = cargoResponse
                        f.setorResponse = setorResponse
                    })                    
                    

                    return {funcResponse}

                } catch (error) {
                    console.log(error)
                }
            }            

        } catch (error) {
            console.log(error)            
        }
        
       return {}        
    }
    
    async setFuncionario(nome: string, cpf: string, cargo: Cargo, salario: number, inicioVigencia: Date, setor: Setor, ativo: boolean) {
        
    }

}

export default Funcionario;