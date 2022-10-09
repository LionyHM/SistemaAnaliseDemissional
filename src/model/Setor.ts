import ISetor from "./interfaces/ISetor";

class Setor implements ISetor{
    Setor: string;
    CentroCusto: number;    

    constructor(setor: string, centroCusto: number){
        this.Setor = setor,    
        this.CentroCusto = centroCusto
    }
}

export default Setor;