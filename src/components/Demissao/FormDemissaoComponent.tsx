import { useState } from "react";
import ConteudoComponent from "../Layout/ConteudoComponent";

export default function FormDemissaoComponent(){
    const [titulosCabecalho, setTitulosCabecalho] = useState([
        "Nome","Cpf","Data de Nascimento", "Setor", "Cargo", "Chefia", "Efetuar Demissão"
    ])
    const [exibirBusca,setExibirBusca] = useState("hidden")
    const [nome, setNome] = useState("hidden")
    const [resultadoBusca, setResultadoBusca] = useState([])

    function renderCabecalho(){
        const arr = []

        for(let titulo = 0; titulo < titulosCabecalho.length; titulo++){
            arr.push(
                <th className="w-1/6 min-w-[160px] text-sm font-semibold text-white border-l border-transparent">
                {titulosCabecalho[titulo]}
                </th>
            )
        }
        return arr
    }

    async function renderBusca(){
        const funcionario = await getFuncionario(nome)
        let arrFunc:any = []

        funcionario.funcResponse.map(f => {
            arrFunc.push(
                <tr>
                    <td className="text-center text-dark font-medium text-sm bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                        {f.Nome}
                    </td>
                    <td className="text-center text-dark font-medium text-sm bg-white border-b border-[#E8E8E8]"
                    >
                        {f.Cpf}
                    </td>
                    <td
                    className="text-center text-dark font-medium text-sm
                    bg-[#F3F6FF] border-b border-[#E8E8E8]">
                        01/01/2000
                    </td>
                    <td
                    className=" text-center text-dark font-medium text-sm bg-white border-b border-[#E8E8E8]">
                        {f.setorResponse.Setor}
                    </td>
                    <td className="text-center text-dark font-medium text-sm bg-[#F3F6FF] border-b border-[#E8E8E8]">
                        {f.cargoResponse.NomeCargo}
                    </td>
                    <td className=" text-center text-dark font-medium text-sm bg-white border-b border-[#E8E8E8]">
                        Bruce
                    </td>
                    <td
                    className="text-center text-dark font-medium text-sm bg-white border-b border-r border-[#E8E8E8]">
                    <a href="javascript:void(0)" className="border border-primary py-2 px-6 text-white inline-block rounded bg-red-400 hover:bg-red-800">
                        Confirmar
                    </a>
                    </td>
                </tr>
            )
        })

        await setExibirBusca("block")

        setResultadoBusca(arrFunc)
    }

    async function getFuncionario(nome: string){
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

    return(
        <ConteudoComponent>
            <div className="w-full">
                <div className="flex w-full flex-wrap absolute top-40">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Digite o nome do funcionário
                        </label>
                        <input onChange={(e) => setNome(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#89a7b1] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Digite o nome do funcionário" />
                       <button onKeyDown={e => e.keyCode==13 ? console.log('Hello World from Input') : null} onClick={() => renderBusca()} className="btnSearchDefault text-white font-bold py-2 px-4 rounded">Buscar</button>
                    </div>
                </div>
                <div className={`p-10 ${exibirBusca}`}>
                    <section className="bg-white py-20 lg:py-[120px]">
                        <div className="container">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full px-4">
                                    <div className="max-w-full overflow-x-auto">
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr className="text-center" style={{backgroundColor: "#566981"}}>
                                               {renderCabecalho()}
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {resultadoBusca}                                          
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </ConteudoComponent>
    )

}