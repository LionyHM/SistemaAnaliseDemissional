import IFuncionario from "./interfaces/IFuncionario";
import Cargo from "./CargoModel";
import Setor from "./SetorModel";
import funcionario from "../data/funcionario"
import cargo from "../data/cargo"
import setor from "../data/setor"
import findString from "../util/functions/findString";
import findCpf from "../util/functions/findCpf";
import validateCPF from "../util/functions/validacaoCpf";


class Funcionario implements IFuncionario{
    Nome: string;
    Cpf: string;
    Cargo: Cargo;
    Salario: number;
    InicioVigencia: Date;
    Setor: Setor;
    Ativo: boolean;    
    
    async getPorNome(nome){
        let func = await funcionario.funcionario.filter(f => findString(nome, f.Nome.toLocaleUpperCase()) && f.Fim_Vigencia == null);
        return func;
    }

    async getPorCpf(cpf){
        let valCpf = validateCPF(cpf);
        if(!valCpf){
            return false
        };        

        let func = await funcionario.funcionario.filter(f => findCpf(cpf, f.Cpf) && f.Fim_Vigencia == null);

        return func;
    }
    async getFuncionario(nomeOuCpf: any) {
        
        try {
            const funcResponse:any = isNaN(nomeOuCpf) ? await this.getPorNome(nomeOuCpf) : await this.getPorCpf(nomeOuCpf);

            if(!isNaN(nomeOuCpf) && !funcResponse){
                return "O Cpf informado não é válido";
            };

            let cargoResponse = {};
            let setorResponse = {};
            
            if(funcResponse.length > 0){
                try {
                    funcResponse.forEach(f => {
                        cargoResponse = cargo.cargo.find(c => c.IdCargo == f.FK_IdCargo);
                        setorResponse = setor.setor.find(s => s.IdSetor == f.FK_IdSetor);

                        f.cargoResponse = cargoResponse;
                        f.setorResponse = setorResponse;
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