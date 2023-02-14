export async function getFuncionario(nome: string){
    const response =  await fetch("/api/get/GetFuncionario",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({    
            nome,
        })
    })         
    const funcionario = await response.json() 
    return funcionario
}