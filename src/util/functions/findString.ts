export default function findString(busca: string, item: string){
    let tamanhoBusca = busca.length
    let tamanhoItem = item.length
    let isTrue = true

    
    for(let i = 0; i  <= tamanhoBusca; i++){
            if(isTrue){
        
                for(let c = 0; c <= tamanhoItem; c++){

                    isTrue = item[c] == busca[i] 
                    if(isTrue){
                        break;  
                    }
                }
                
            }
    }

    if(isTrue){
        return item;
    }

}

