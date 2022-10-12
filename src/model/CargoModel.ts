import ICargo from "./interfaces/ICargo";

class Cargo implements ICargo{
    NomeCargo: string;
    Descricao: string;

    constructor(nomeCargo: string, descricao : string){
        this.NomeCargo = nomeCargo,
        this.Descricao = descricao        
    }
}

export default Cargo;