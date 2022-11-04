export default function findString(busca: string, item: string){
    let tamanhoBusca = busca.length
    let tamanhoItem = item.length
    let isTrue = true
    let c = 0

    
    for(let i = 0; i  <= tamanhoBusca; i++){
            if(isTrue && busca[i] != undefined){
        
                for(c; c < tamanhoItem; c++){

                    isTrue = item[c] === busca[i] 

                    if(isTrue){
                        break;  
                    }else{
                        isTrue = false
                    }
                }                
            }
    }

    if(isTrue){
        return item;
    }

}

